class Checklist < ActiveRecord::Base

  belongs_to :book
  belongs_to :user
  has_many :items

end
