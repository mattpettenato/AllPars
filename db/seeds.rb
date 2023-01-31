# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#

courses = Course.create([
  {
    name: "Crystal Springs Golf Course",
    image_url: "https://www.playcrystalsprings.com/images/slideshows/003.jpg",
  },
  {
    name: "Sharp Park Golf Course",
    image_url: "http://res.cloudinary.com/usga/image/upload/v1492465051/usga/images/article-splash/2017/sharp-park-417.jpg",
  },
  {
    name: "Presidio Golf Course",
    image_url: "https://golf.com/wp-content/uploads/2019/06/hp.jpg?width=1568&height=882",
  },
  {
    name: "TPC Harding Park",
    image_url: "https://golf.com/wp-content/uploads/2020/08/TPC-Harding-Park-2.jpg",
  },
])

reviews = Review.create([
  {
    title: "Great course",
    description: "I love this course",
    score: 5,
    course: courses.first,
  },
  {
    title: "This course is too hard",
    description: "I can't believe I paid so much money for this course just to shoot 110",
    score: 1,
    course: courses.first,
  },
])
