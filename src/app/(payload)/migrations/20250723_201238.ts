import { MigrateUpArgs, MigrateDownArgs, sql } from '@payloadcms/db-postgres'

export async function up({ db, payload, req }: MigrateUpArgs): Promise<void> {
  await db.execute(sql`
   ALTER TABLE "pages_blocks_tabs_block_tabs_items" RENAME TO "pages_blocks_tabs_block_tabs_rows";
  ALTER TABLE "_pages_v_blocks_tabs_block_tabs_items" RENAME TO "_pages_v_blocks_tabs_block_tabs_rows";
  ALTER TABLE "templates_blocks_tabs_block_tabs_items" RENAME TO "templates_blocks_tabs_block_tabs_rows";
  ALTER TABLE "_templates_v_blocks_tabs_block_tabs_items" RENAME TO "_templates_v_blocks_tabs_block_tabs_rows";
  ALTER TABLE "pages_blocks_tabs_block_tabs_rows" DROP CONSTRAINT "pages_blocks_tabs_block_tabs_items_parent_id_fk";
  
  ALTER TABLE "_pages_v_blocks_tabs_block_tabs_rows" DROP CONSTRAINT "_pages_v_blocks_tabs_block_tabs_items_parent_id_fk";
  
  ALTER TABLE "templates_blocks_tabs_block_tabs_rows" DROP CONSTRAINT "templates_blocks_tabs_block_tabs_items_parent_id_fk";
  
  ALTER TABLE "_templates_v_blocks_tabs_block_tabs_rows" DROP CONSTRAINT "_templates_v_blocks_tabs_block_tabs_items_parent_id_fk";
  
  DROP INDEX "pages_blocks_tabs_block_tabs_items_order_idx";
  DROP INDEX "pages_blocks_tabs_block_tabs_items_parent_id_idx";
  DROP INDEX "_pages_v_blocks_tabs_block_tabs_items_order_idx";
  DROP INDEX "_pages_v_blocks_tabs_block_tabs_items_parent_id_idx";
  DROP INDEX "templates_blocks_tabs_block_tabs_items_order_idx";
  DROP INDEX "templates_blocks_tabs_block_tabs_items_parent_id_idx";
  DROP INDEX "_templates_v_blocks_tabs_block_tabs_items_order_idx";
  DROP INDEX "_templates_v_blocks_tabs_block_tabs_items_parent_id_idx";
  ALTER TABLE "pages_blocks_tabs_block_tabs_rows" ADD CONSTRAINT "pages_blocks_tabs_block_tabs_rows_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages_blocks_tabs_block_tabs"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_tabs_block_tabs_rows" ADD CONSTRAINT "_pages_v_blocks_tabs_block_tabs_rows_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v_blocks_tabs_block_tabs"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "templates_blocks_tabs_block_tabs_rows" ADD CONSTRAINT "templates_blocks_tabs_block_tabs_rows_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."templates_blocks_tabs_block_tabs"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_templates_v_blocks_tabs_block_tabs_rows" ADD CONSTRAINT "_templates_v_blocks_tabs_block_tabs_rows_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_templates_v_blocks_tabs_block_tabs"("id") ON DELETE cascade ON UPDATE no action;
  CREATE INDEX "pages_blocks_tabs_block_tabs_rows_order_idx" ON "pages_blocks_tabs_block_tabs_rows" USING btree ("_order");
  CREATE INDEX "pages_blocks_tabs_block_tabs_rows_parent_id_idx" ON "pages_blocks_tabs_block_tabs_rows" USING btree ("_parent_id");
  CREATE INDEX "_pages_v_blocks_tabs_block_tabs_rows_order_idx" ON "_pages_v_blocks_tabs_block_tabs_rows" USING btree ("_order");
  CREATE INDEX "_pages_v_blocks_tabs_block_tabs_rows_parent_id_idx" ON "_pages_v_blocks_tabs_block_tabs_rows" USING btree ("_parent_id");
  CREATE INDEX "templates_blocks_tabs_block_tabs_rows_order_idx" ON "templates_blocks_tabs_block_tabs_rows" USING btree ("_order");
  CREATE INDEX "templates_blocks_tabs_block_tabs_rows_parent_id_idx" ON "templates_blocks_tabs_block_tabs_rows" USING btree ("_parent_id");
  CREATE INDEX "_templates_v_blocks_tabs_block_tabs_rows_order_idx" ON "_templates_v_blocks_tabs_block_tabs_rows" USING btree ("_order");
  CREATE INDEX "_templates_v_blocks_tabs_block_tabs_rows_parent_id_idx" ON "_templates_v_blocks_tabs_block_tabs_rows" USING btree ("_parent_id");`)
}

export async function down({ db, payload, req }: MigrateDownArgs): Promise<void> {
  await db.execute(sql`
   ALTER TABLE "pages_blocks_tabs_block_tabs_rows" RENAME TO "pages_blocks_tabs_block_tabs_items";
  ALTER TABLE "_pages_v_blocks_tabs_block_tabs_rows" RENAME TO "_pages_v_blocks_tabs_block_tabs_items";
  ALTER TABLE "templates_blocks_tabs_block_tabs_rows" RENAME TO "templates_blocks_tabs_block_tabs_items";
  ALTER TABLE "_templates_v_blocks_tabs_block_tabs_rows" RENAME TO "_templates_v_blocks_tabs_block_tabs_items";
  ALTER TABLE "pages_blocks_tabs_block_tabs_items" DROP CONSTRAINT "pages_blocks_tabs_block_tabs_rows_parent_id_fk";
  
  ALTER TABLE "_pages_v_blocks_tabs_block_tabs_items" DROP CONSTRAINT "_pages_v_blocks_tabs_block_tabs_rows_parent_id_fk";
  
  ALTER TABLE "templates_blocks_tabs_block_tabs_items" DROP CONSTRAINT "templates_blocks_tabs_block_tabs_rows_parent_id_fk";
  
  ALTER TABLE "_templates_v_blocks_tabs_block_tabs_items" DROP CONSTRAINT "_templates_v_blocks_tabs_block_tabs_rows_parent_id_fk";
  
  DROP INDEX "pages_blocks_tabs_block_tabs_rows_order_idx";
  DROP INDEX "pages_blocks_tabs_block_tabs_rows_parent_id_idx";
  DROP INDEX "_pages_v_blocks_tabs_block_tabs_rows_order_idx";
  DROP INDEX "_pages_v_blocks_tabs_block_tabs_rows_parent_id_idx";
  DROP INDEX "templates_blocks_tabs_block_tabs_rows_order_idx";
  DROP INDEX "templates_blocks_tabs_block_tabs_rows_parent_id_idx";
  DROP INDEX "_templates_v_blocks_tabs_block_tabs_rows_order_idx";
  DROP INDEX "_templates_v_blocks_tabs_block_tabs_rows_parent_id_idx";
  ALTER TABLE "pages_blocks_tabs_block_tabs_items" ADD CONSTRAINT "pages_blocks_tabs_block_tabs_items_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages_blocks_tabs_block_tabs"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_tabs_block_tabs_items" ADD CONSTRAINT "_pages_v_blocks_tabs_block_tabs_items_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v_blocks_tabs_block_tabs"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "templates_blocks_tabs_block_tabs_items" ADD CONSTRAINT "templates_blocks_tabs_block_tabs_items_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."templates_blocks_tabs_block_tabs"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_templates_v_blocks_tabs_block_tabs_items" ADD CONSTRAINT "_templates_v_blocks_tabs_block_tabs_items_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_templates_v_blocks_tabs_block_tabs"("id") ON DELETE cascade ON UPDATE no action;
  CREATE INDEX "pages_blocks_tabs_block_tabs_items_order_idx" ON "pages_blocks_tabs_block_tabs_items" USING btree ("_order");
  CREATE INDEX "pages_blocks_tabs_block_tabs_items_parent_id_idx" ON "pages_blocks_tabs_block_tabs_items" USING btree ("_parent_id");
  CREATE INDEX "_pages_v_blocks_tabs_block_tabs_items_order_idx" ON "_pages_v_blocks_tabs_block_tabs_items" USING btree ("_order");
  CREATE INDEX "_pages_v_blocks_tabs_block_tabs_items_parent_id_idx" ON "_pages_v_blocks_tabs_block_tabs_items" USING btree ("_parent_id");
  CREATE INDEX "templates_blocks_tabs_block_tabs_items_order_idx" ON "templates_blocks_tabs_block_tabs_items" USING btree ("_order");
  CREATE INDEX "templates_blocks_tabs_block_tabs_items_parent_id_idx" ON "templates_blocks_tabs_block_tabs_items" USING btree ("_parent_id");
  CREATE INDEX "_templates_v_blocks_tabs_block_tabs_items_order_idx" ON "_templates_v_blocks_tabs_block_tabs_items" USING btree ("_order");
  CREATE INDEX "_templates_v_blocks_tabs_block_tabs_items_parent_id_idx" ON "_templates_v_blocks_tabs_block_tabs_items" USING btree ("_parent_id");`)
}
