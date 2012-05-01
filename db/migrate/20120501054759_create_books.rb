class CreateBooks < ActiveRecord::Migration
  def change
    create_table :books do |t|
      t.integer :user_id, :null => false
      t.string :title

      t.timestamps
    end
  end
end
