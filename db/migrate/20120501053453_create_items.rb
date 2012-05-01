class CreateItems < ActiveRecord::Migration
  def change
    create_table :items do |t|
      t.integer :user_id, :null => false
      t.string :title
      t.text :description
      t.boolean :done

      t.timestamps
    end
  end
end
