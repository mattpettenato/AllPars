module Api
  module V1
    class CoursesController < ApplicationController
      # protect_from_forgery with: :null_session # disable CSRF protection

      def index # GET /api/v1/airlines
        courses = Course.all
        # render json: serializer(courses, options)
        render json: CourseSerializer.new(courses).serialized_json
      end
      
      # GET /api/v1/courses/:slug
      def show
        course = Course.find_by(slug: params[:slug])
        render json: CourseSerializer.new(courses).serialized_json
      end

      def create # create new course
        course = Course.new(course_params) #  create new course

        if course.save
          render json: CourseSerializer.new(course).serialized_json # render course
        else
          render json: {error: course.errors.messages}, status: 422 # render error message
        end
      end

      def update # update course
        course = Course.find_by(slug: params[:slug]) #  find course by slug like show method

        if course.update(course_params) # update course
          render json: CourseSerializer.new(course, options).serialized_json # render course
        else
          render json: { error: course.errors.messages }, status: 422 # render error message
        end
      end

      def destroy # destroy course
        course = Course.find_by(slug: params[:slug]) #  find course by slug like show method

        if course.destroy # destroy course
          head :no_content # return no content
        else
          render json: { error: course.errors.messages }, status: 422 # render error message
        end
      end

      private

      def courses
        @courses ||= Course.includes(reviews: :user).all
      end

      def course_params
        params.require(:course).permit(:name, :image_url)
      end

      def options
        @options ||={ include: %i[reviews]} # include reviews when rendering course
      end
    end
  end
end