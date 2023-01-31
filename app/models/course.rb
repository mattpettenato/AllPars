class Course < ApplicationRecord
  has_many :reviews

  before_create :slugify # will set slug before saving to db

  def slugify
    self.slug = name.parameterize #will create url safe name
  end

  def avg_score
    reviews.average(:score).round(2).to_f # will return average score of all reviews
  end
end
