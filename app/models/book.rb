class Book < ActiveRecord::Base

  has_many :checklists

end
