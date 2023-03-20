import {
  MigrationInterface,
  QueryRunner,
  TableColumn,
  TableForeignKey,
} from 'typeorm';

export class addDishToRestaurant1679237184455 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.addColumn(
      'dish',
      new TableColumn({
        name: 'restaurant_id',
        type: 'uuid',
        isNullable: false,
      })
    );

    await queryRunner.createForeignKey(
      'dish',
      new TableForeignKey({
        name: 'FKDishRestaurant',
        columnNames: ['restaurant_id'],
        referencedColumnNames: ['id'],
        referencedTableName: 'restaurant',
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE',
      })
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropForeignKey('dish', 'FKDishRestaurant');
    await queryRunner.dropColumn('dish', 'restaurant_id');
  }
}
