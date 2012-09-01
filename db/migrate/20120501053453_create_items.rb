class CreateItems < ActiveRecord::Migration
  def change
    create_table :items do |t|
      t.integer :checklist_id, :null => false
      t.string :title
      t.text :description
      t.boolean :done

      t.timestamps
    end
  end
end
