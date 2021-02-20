import {MigrationInterface, QueryRunner} from "typeorm";

export class createtables1613762989572 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "user" RENAME "firstName" to "fullName"`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "user" RENAME "fullName" to "firstName"`);
    }

}
