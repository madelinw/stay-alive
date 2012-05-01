class CreateChecklists < ActiveRecord::Migration
  def change
    create_table :checklists do |t|
      t.integer :user_id, :null => false
      t.string :title
      t.text :description

      t.timestamps
    end
  end
end
