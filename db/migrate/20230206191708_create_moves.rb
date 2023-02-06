class CreateMoves < ActiveRecord::Migration[7.0]
  def change
    create_table :moves do |t|
      t.string :to
      t.string :from
      t.string :color
      t.string :piece
      t.references :game

      t.timestamps
    end
  end
end
