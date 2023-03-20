import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export class createDish1678225393849 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'dish',
        columns: [
          { name: 'id', type: 'uuid', isPrimary: true },
          { name: 'name', type: 'varchar', isNullable: false },
          { name: 'description', type: 'varchar', isNullable: true },
          { name: 'unit_price', type: 'float', isNullable: false },
          { name: 'image', type: 'varchar', isNullable: false },
        ],
      })
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('dish');
  }
}
