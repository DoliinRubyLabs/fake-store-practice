import { MigrateUpArgs, MigrateDownArgs, sql } from '@payloadcms/db-postgres'

export async function up({ db, payload, req }: MigrateUpArgs): Promise<void> {
  await db.execute(sql`
   CREATE TABLE "pages_blocks_image_scroller_block_rows" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"image_id" uuid
  );
  
  CREATE TABLE "_pages_v_blocks_image_scroller_block_rows" (
  	"_order" integer NOT NULL,
  	"_parent_id" uuid NOT NULL,
  	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
  	"image_id" uuid,
  	"_uuid" varchar
  );
  
  CREATE TABLE "templates_blocks_image_scroller_block_rows" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"image_id" uuid
  );
  
  CREATE TABLE "_templates_v_blocks_image_scroller_block_rows" (
  	"_order" integer NOT NULL,
  	"_parent_id" uuid NOT NULL,
  	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
  	"image_id" uuid,
  	"_uuid" varchar
  );
  
  DROP TABLE "pages_blocks_image_scroller_block_list" CASCADE;
  DROP TABLE "pages_blocks_rich_text_block" CASCADE;
  DROP TABLE "_pages_v_blocks_image_scroller_block_list" CASCADE;
  DROP TABLE "_pages_v_blocks_rich_text_block" CASCADE;
  DROP TABLE "templates_blocks_image_scroller_block_list" CASCADE;
  DROP TABLE "templates_blocks_rich_text_block" CASCADE;
  DROP TABLE "_templates_v_blocks_image_scroller_block_list" CASCADE;
  DROP TABLE "_templates_v_blocks_rich_text_block" CASCADE;
  ALTER TABLE "pages_blocks_image_scroller_block_rows" ADD CONSTRAINT "pages_blocks_image_scroller_block_rows_image_id_images_id_fk" FOREIGN KEY ("image_id") REFERENCES "public"."images"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "pages_blocks_image_scroller_block_rows" ADD CONSTRAINT "pages_blocks_image_scroller_block_rows_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages_blocks_image_scroller_block"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_image_scroller_block_rows" ADD CONSTRAINT "_pages_v_blocks_image_scroller_block_rows_image_id_images_id_fk" FOREIGN KEY ("image_id") REFERENCES "public"."images"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_image_scroller_block_rows" ADD CONSTRAINT "_pages_v_blocks_image_scroller_block_rows_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v_blocks_image_scroller_block"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "templates_blocks_image_scroller_block_rows" ADD CONSTRAINT "templates_blocks_image_scroller_block_rows_image_id_images_id_fk" FOREIGN KEY ("image_id") REFERENCES "public"."images"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "templates_blocks_image_scroller_block_rows" ADD CONSTRAINT "templates_blocks_image_scroller_block_rows_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."templates_blocks_image_scroller_block"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_templates_v_blocks_image_scroller_block_rows" ADD CONSTRAINT "_templates_v_blocks_image_scroller_block_rows_image_id_images_id_fk" FOREIGN KEY ("image_id") REFERENCES "public"."images"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "_templates_v_blocks_image_scroller_block_rows" ADD CONSTRAINT "_templates_v_blocks_image_scroller_block_rows_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_templates_v_blocks_image_scroller_block"("id") ON DELETE cascade ON UPDATE no action;
  CREATE INDEX "pages_blocks_image_scroller_block_rows_order_idx" ON "pages_blocks_image_scroller_block_rows" USING btree ("_order");
  CREATE INDEX "pages_blocks_image_scroller_block_rows_parent_id_idx" ON "pages_blocks_image_scroller_block_rows" USING btree ("_parent_id");
  CREATE INDEX "pages_blocks_image_scroller_block_rows_image_idx" ON "pages_blocks_image_scroller_block_rows" USING btree ("image_id");
  CREATE INDEX "_pages_v_blocks_image_scroller_block_rows_order_idx" ON "_pages_v_blocks_image_scroller_block_rows" USING btree ("_order");
  CREATE INDEX "_pages_v_blocks_image_scroller_block_rows_parent_id_idx" ON "_pages_v_blocks_image_scroller_block_rows" USING btree ("_parent_id");
  CREATE INDEX "_pages_v_blocks_image_scroller_block_rows_image_idx" ON "_pages_v_blocks_image_scroller_block_rows" USING btree ("image_id");
  CREATE INDEX "templates_blocks_image_scroller_block_rows_order_idx" ON "templates_blocks_image_scroller_block_rows" USING btree ("_order");
  CREATE INDEX "templates_blocks_image_scroller_block_rows_parent_id_idx" ON "templates_blocks_image_scroller_block_rows" USING btree ("_parent_id");
  CREATE INDEX "templates_blocks_image_scroller_block_rows_image_idx" ON "templates_blocks_image_scroller_block_rows" USING btree ("image_id");
  CREATE INDEX "_templates_v_blocks_image_scroller_block_rows_order_idx" ON "_templates_v_blocks_image_scroller_block_rows" USING btree ("_order");
  CREATE INDEX "_templates_v_blocks_image_scroller_block_rows_parent_id_idx" ON "_templates_v_blocks_image_scroller_block_rows" USING btree ("_parent_id");
  CREATE INDEX "_templates_v_blocks_image_scroller_block_rows_image_idx" ON "_templates_v_blocks_image_scroller_block_rows" USING btree ("image_id");`)
}

export async function down({ db, payload, req }: MigrateDownArgs): Promise<void> {
  await db.execute(sql`
   CREATE TABLE "pages_blocks_image_scroller_block_list" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"image_id" uuid
  );
  
  CREATE TABLE "pages_blocks_rich_text_block" (
  	"_order" integer NOT NULL,
  	"_parent_id" uuid NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"content" jsonb,
  	"block_name" varchar
  );
  
  CREATE TABLE "_pages_v_blocks_image_scroller_block_list" (
  	"_order" integer NOT NULL,
  	"_parent_id" uuid NOT NULL,
  	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
  	"image_id" uuid,
  	"_uuid" varchar
  );
  
  CREATE TABLE "_pages_v_blocks_rich_text_block" (
  	"_order" integer NOT NULL,
  	"_parent_id" uuid NOT NULL,
  	"_path" text NOT NULL,
  	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
  	"content" jsonb,
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "templates_blocks_image_scroller_block_list" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"image_id" uuid
  );
  
  CREATE TABLE "templates_blocks_rich_text_block" (
  	"_order" integer NOT NULL,
  	"_parent_id" uuid NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"content" jsonb,
  	"block_name" varchar
  );
  
  CREATE TABLE "_templates_v_blocks_image_scroller_block_list" (
  	"_order" integer NOT NULL,
  	"_parent_id" uuid NOT NULL,
  	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
  	"image_id" uuid,
  	"_uuid" varchar
  );
  
  CREATE TABLE "_templates_v_blocks_rich_text_block" (
  	"_order" integer NOT NULL,
  	"_parent_id" uuid NOT NULL,
  	"_path" text NOT NULL,
  	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
  	"content" jsonb,
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  DROP TABLE "pages_blocks_image_scroller_block_rows" CASCADE;
  DROP TABLE "_pages_v_blocks_image_scroller_block_rows" CASCADE;
  DROP TABLE "templates_blocks_image_scroller_block_rows" CASCADE;
  DROP TABLE "_templates_v_blocks_image_scroller_block_rows" CASCADE;
  ALTER TABLE "pages_blocks_image_scroller_block_list" ADD CONSTRAINT "pages_blocks_image_scroller_block_list_image_id_images_id_fk" FOREIGN KEY ("image_id") REFERENCES "public"."images"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "pages_blocks_image_scroller_block_list" ADD CONSTRAINT "pages_blocks_image_scroller_block_list_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages_blocks_image_scroller_block"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_rich_text_block" ADD CONSTRAINT "pages_blocks_rich_text_block_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_image_scroller_block_list" ADD CONSTRAINT "_pages_v_blocks_image_scroller_block_list_image_id_images_id_fk" FOREIGN KEY ("image_id") REFERENCES "public"."images"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_image_scroller_block_list" ADD CONSTRAINT "_pages_v_blocks_image_scroller_block_list_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v_blocks_image_scroller_block"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_rich_text_block" ADD CONSTRAINT "_pages_v_blocks_rich_text_block_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "templates_blocks_image_scroller_block_list" ADD CONSTRAINT "templates_blocks_image_scroller_block_list_image_id_images_id_fk" FOREIGN KEY ("image_id") REFERENCES "public"."images"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "templates_blocks_image_scroller_block_list" ADD CONSTRAINT "templates_blocks_image_scroller_block_list_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."templates_blocks_image_scroller_block"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "templates_blocks_rich_text_block" ADD CONSTRAINT "templates_blocks_rich_text_block_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."templates"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_templates_v_blocks_image_scroller_block_list" ADD CONSTRAINT "_templates_v_blocks_image_scroller_block_list_image_id_images_id_fk" FOREIGN KEY ("image_id") REFERENCES "public"."images"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "_templates_v_blocks_image_scroller_block_list" ADD CONSTRAINT "_templates_v_blocks_image_scroller_block_list_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_templates_v_blocks_image_scroller_block"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_templates_v_blocks_rich_text_block" ADD CONSTRAINT "_templates_v_blocks_rich_text_block_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_templates_v"("id") ON DELETE cascade ON UPDATE no action;
  CREATE INDEX "pages_blocks_image_scroller_block_list_order_idx" ON "pages_blocks_image_scroller_block_list" USING btree ("_order");
  CREATE INDEX "pages_blocks_image_scroller_block_list_parent_id_idx" ON "pages_blocks_image_scroller_block_list" USING btree ("_parent_id");
  CREATE INDEX "pages_blocks_image_scroller_block_list_image_idx" ON "pages_blocks_image_scroller_block_list" USING btree ("image_id");
  CREATE INDEX "pages_blocks_rich_text_block_order_idx" ON "pages_blocks_rich_text_block" USING btree ("_order");
  CREATE INDEX "pages_blocks_rich_text_block_parent_id_idx" ON "pages_blocks_rich_text_block" USING btree ("_parent_id");
  CREATE INDEX "pages_blocks_rich_text_block_path_idx" ON "pages_blocks_rich_text_block" USING btree ("_path");
  CREATE INDEX "_pages_v_blocks_image_scroller_block_list_order_idx" ON "_pages_v_blocks_image_scroller_block_list" USING btree ("_order");
  CREATE INDEX "_pages_v_blocks_image_scroller_block_list_parent_id_idx" ON "_pages_v_blocks_image_scroller_block_list" USING btree ("_parent_id");
  CREATE INDEX "_pages_v_blocks_image_scroller_block_list_image_idx" ON "_pages_v_blocks_image_scroller_block_list" USING btree ("image_id");
  CREATE INDEX "_pages_v_blocks_rich_text_block_order_idx" ON "_pages_v_blocks_rich_text_block" USING btree ("_order");
  CREATE INDEX "_pages_v_blocks_rich_text_block_parent_id_idx" ON "_pages_v_blocks_rich_text_block" USING btree ("_parent_id");
  CREATE INDEX "_pages_v_blocks_rich_text_block_path_idx" ON "_pages_v_blocks_rich_text_block" USING btree ("_path");
  CREATE INDEX "templates_blocks_image_scroller_block_list_order_idx" ON "templates_blocks_image_scroller_block_list" USING btree ("_order");
  CREATE INDEX "templates_blocks_image_scroller_block_list_parent_id_idx" ON "templates_blocks_image_scroller_block_list" USING btree ("_parent_id");
  CREATE INDEX "templates_blocks_image_scroller_block_list_image_idx" ON "templates_blocks_image_scroller_block_list" USING btree ("image_id");
  CREATE INDEX "templates_blocks_rich_text_block_order_idx" ON "templates_blocks_rich_text_block" USING btree ("_order");
  CREATE INDEX "templates_blocks_rich_text_block_parent_id_idx" ON "templates_blocks_rich_text_block" USING btree ("_parent_id");
  CREATE INDEX "templates_blocks_rich_text_block_path_idx" ON "templates_blocks_rich_text_block" USING btree ("_path");
  CREATE INDEX "_templates_v_blocks_image_scroller_block_list_order_idx" ON "_templates_v_blocks_image_scroller_block_list" USING btree ("_order");
  CREATE INDEX "_templates_v_blocks_image_scroller_block_list_parent_id_idx" ON "_templates_v_blocks_image_scroller_block_list" USING btree ("_parent_id");
  CREATE INDEX "_templates_v_blocks_image_scroller_block_list_image_idx" ON "_templates_v_blocks_image_scroller_block_list" USING btree ("image_id");
  CREATE INDEX "_templates_v_blocks_rich_text_block_order_idx" ON "_templates_v_blocks_rich_text_block" USING btree ("_order");
  CREATE INDEX "_templates_v_blocks_rich_text_block_parent_id_idx" ON "_templates_v_blocks_rich_text_block" USING btree ("_parent_id");
  CREATE INDEX "_templates_v_blocks_rich_text_block_path_idx" ON "_templates_v_blocks_rich_text_block" USING btree ("_path");`)
}
