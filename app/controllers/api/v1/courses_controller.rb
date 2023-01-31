module Api
  module V1
    class CoursesController < ApplicationController
      def index  # get all courses
        courses = Course.all
        render json: CourseSerializer.new(courses, options).serialized_json # render all courses
      end

      def show # get course by slug
        course = Course.find_by(slug: params[:slug])

        render json: CourseSerializer.new(course, options).serialized_json # render course
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

      def course_params
        params.require(:airline).permit(:name, :image_url)
      end

      def options
        @options ||={ include: %i[reviews]} # include reviews when rendering course
      end
    end
  end
end