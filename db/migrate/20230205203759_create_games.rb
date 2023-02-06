class CreateGames < ActiveRecord::Migration[7.0]
  def change
    create_table :games do |t|
      t.references :white_user, foreign_key: false
      t.references :black_user, foreign_key: false
      t.string :fen

      t.timestamps
    end
    add_foreign_key :games, :users, column: :white_user_id
    add_foreign_key :games, :users, column: :black_user_id
  end
end
