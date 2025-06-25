import { MigrateDownArgs, MigrateUpArgs, sql } from '@payloadcms/db-postgres'

export async function up({ db, payload, req }: MigrateUpArgs): Promise<void> {
  await db.execute(sql`
   CREATE TYPE "public"."_locales" AS ENUM('en', 'fr', 'de', 'no', 'es', 'pt', 'pl', 'da-DK', 'cs', 'it', 'ro', 'sv', 'el', 'nl', 'hr', 'et-EE', 'hu', 'lv', 'sl', 'lt', 'mt-MT', 'sk', 'fi', 'bg', 'pt-BR', 'ga-IE', 'es-MX', 'tr', 'ar', 'fa-IR', 'ku', 'ru', 'ko', 'ja', 'th', 'zh');
  CREATE TYPE "public"."enum_layout_blocks_footer_alignment" AS ENUM('left', 'center', 'right');
  CREATE TYPE "public"."enum_layout_status" AS ENUM('draft', 'published');
  CREATE TYPE "public"."enum__layout_v_blocks_footer_alignment" AS ENUM('left', 'center', 'right');
  CREATE TYPE "public"."enum__layout_v_version_status" AS ENUM('draft', 'published');
  CREATE TYPE "public"."enum__layout_v_published_locale" AS ENUM('en', 'fr', 'de', 'no', 'es', 'pt', 'pl', 'da-DK', 'cs', 'it', 'ro', 'sv', 'el', 'nl', 'hr', 'et-EE', 'hu', 'lv', 'sl', 'lt', 'mt-MT', 'sk', 'fi', 'bg', 'pt-BR', 'ga-IE', 'es-MX', 'tr', 'ar', 'fa-IR', 'ku', 'ru', 'ko', 'ja', 'th', 'zh');
  CREATE TYPE "public"."enum_pages_blocks_text_content_alignment" AS ENUM('left', 'center', 'right');
  CREATE TYPE "public"."enum_pages_blocks_form_builder_fields_field_type" AS ENUM('text', 'email', 'phone', 'textarea', 'select', 'checkbox', 'radio');
  CREATE TYPE "public"."enum_pages_status" AS ENUM('draft', 'published');
  CREATE TYPE "public"."enum__pages_v_blocks_text_content_alignment" AS ENUM('left', 'center', 'right');
  CREATE TYPE "public"."enum__pages_v_blocks_form_builder_fields_field_type" AS ENUM('text', 'email', 'phone', 'textarea', 'select', 'checkbox', 'radio');
  CREATE TYPE "public"."enum__pages_v_version_status" AS ENUM('draft', 'published');
  CREATE TYPE "public"."enum__pages_v_published_locale" AS ENUM('en', 'fr', 'de', 'no', 'es', 'pt', 'pl', 'da-DK', 'cs', 'it', 'ro', 'sv', 'el', 'nl', 'hr', 'et-EE', 'hu', 'lv', 'sl', 'lt', 'mt-MT', 'sk', 'fi', 'bg', 'pt-BR', 'ga-IE', 'es-MX', 'tr', 'ar', 'fa-IR', 'ku', 'ru', 'ko', 'ja', 'th', 'zh');
  CREATE TYPE "public"."role" AS ENUM('admin', 'root');
  CREATE TABLE "layout_blocks_header_navigation_links" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"url" varchar,
  	"open_in_new_tab" boolean DEFAULT false
  );
  
  CREATE TABLE "layout_blocks_header_navigation_links_locales" (
  	"label" varchar,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" varchar NOT NULL
  );
  
  CREATE TABLE "layout_blocks_header_navigation" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL
  );
  
  CREATE TABLE "layout_blocks_header_navigation_locales" (
  	"label" varchar,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" varchar NOT NULL
  );
  
  CREATE TABLE "layout_blocks_header_buttons" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"url" varchar,
  	"icon_id" integer
  );
  
  CREATE TABLE "layout_blocks_header_buttons_locales" (
  	"text" varchar,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" varchar NOT NULL
  );
  
  CREATE TABLE "layout_blocks_header" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"logo_id" integer,
  	"block_name" varchar
  );
  
  CREATE TABLE "layout_blocks_footer_menu_columns_links" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"url" varchar,
  	"open_in_new_tab" boolean DEFAULT false
  );
  
  CREATE TABLE "layout_blocks_footer_menu_columns_links_locales" (
  	"label" varchar,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" varchar NOT NULL
  );
  
  CREATE TABLE "layout_blocks_footer_menu_columns" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL
  );
  
  CREATE TABLE "layout_blocks_footer_menu_columns_locales" (
  	"column_title" varchar,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" varchar NOT NULL
  );
  
  CREATE TABLE "layout_blocks_footer" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"logo_id" integer,
  	"alignment" "enum_layout_blocks_footer_alignment" DEFAULT 'center',
  	"block_name" varchar
  );
  
  CREATE TABLE "layout_blocks_footer_locales" (
  	"copyright" jsonb,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" varchar NOT NULL
  );
  
  CREATE TABLE "layout" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"name" varchar,
  	"slug" varchar,
  	"slug_lock" boolean DEFAULT true,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"_status" "enum_layout_status" DEFAULT 'draft'
  );
  
  CREATE TABLE "layout_locales" (
  	"meta_title" varchar,
  	"meta_description" varchar,
  	"meta_image_id" integer,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" integer NOT NULL
  );
  
  CREATE TABLE "_layout_v_blocks_header_navigation_links" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"url" varchar,
  	"open_in_new_tab" boolean DEFAULT false,
  	"_uuid" varchar
  );
  
  CREATE TABLE "_layout_v_blocks_header_navigation_links_locales" (
  	"label" varchar,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" integer NOT NULL
  );
  
  CREATE TABLE "_layout_v_blocks_header_navigation" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_uuid" varchar
  );
  
  CREATE TABLE "_layout_v_blocks_header_navigation_locales" (
  	"label" varchar,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" integer NOT NULL
  );
  
  CREATE TABLE "_layout_v_blocks_header_buttons" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"url" varchar,
  	"icon_id" integer,
  	"_uuid" varchar
  );
  
  CREATE TABLE "_layout_v_blocks_header_buttons_locales" (
  	"text" varchar,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" integer NOT NULL
  );
  
  CREATE TABLE "_layout_v_blocks_header" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"logo_id" integer,
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "_layout_v_blocks_footer_menu_columns_links" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"url" varchar,
  	"open_in_new_tab" boolean DEFAULT false,
  	"_uuid" varchar
  );
  
  CREATE TABLE "_layout_v_blocks_footer_menu_columns_links_locales" (
  	"label" varchar,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" integer NOT NULL
  );
  
  CREATE TABLE "_layout_v_blocks_footer_menu_columns" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_uuid" varchar
  );
  
  CREATE TABLE "_layout_v_blocks_footer_menu_columns_locales" (
  	"column_title" varchar,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" integer NOT NULL
  );
  
  CREATE TABLE "_layout_v_blocks_footer" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"logo_id" integer,
  	"alignment" "enum__layout_v_blocks_footer_alignment" DEFAULT 'center',
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "_layout_v_blocks_footer_locales" (
  	"copyright" jsonb,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" integer NOT NULL
  );
  
  CREATE TABLE "_layout_v" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"parent_id" integer,
  	"version_name" varchar,
  	"version_slug" varchar,
  	"version_slug_lock" boolean DEFAULT true,
  	"version_updated_at" timestamp(3) with time zone,
  	"version_created_at" timestamp(3) with time zone,
  	"version__status" "enum__layout_v_version_status" DEFAULT 'draft',
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"snapshot" boolean,
  	"published_locale" "enum__layout_v_published_locale",
  	"latest" boolean,
  	"autosave" boolean
  );
  
  CREATE TABLE "_layout_v_locales" (
  	"version_meta_title" varchar,
  	"version_meta_description" varchar,
  	"version_meta_image_id" integer,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" integer NOT NULL
  );
  
  CREATE TABLE "pages_blocks_text_content" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"image_id" integer,
  	"alignment" "enum_pages_blocks_text_content_alignment" DEFAULT 'left',
  	"block_name" varchar
  );
  
  CREATE TABLE "pages_blocks_text_content_locales" (
  	"under_title" varchar,
  	"title" varchar,
  	"content" jsonb,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" varchar NOT NULL
  );
  
  CREATE TABLE "pages_blocks_form_builder_fields_options" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"value" varchar
  );
  
  CREATE TABLE "pages_blocks_form_builder_fields_options_locales" (
  	"label" varchar,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" varchar NOT NULL
  );
  
  CREATE TABLE "pages_blocks_form_builder_fields" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"field_type" "enum_pages_blocks_form_builder_fields_field_type",
  	"required" boolean DEFAULT false
  );
  
  CREATE TABLE "pages_blocks_form_builder_fields_locales" (
  	"label" varchar,
  	"placeholder" varchar,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" varchar NOT NULL
  );
  
  CREATE TABLE "pages_blocks_form_builder" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"show_submit_button" boolean DEFAULT true,
  	"block_name" varchar
  );
  
  CREATE TABLE "pages_blocks_form_builder_locales" (
  	"title" varchar,
  	"description" varchar,
  	"submit_button_text" varchar DEFAULT 'Submit',
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" varchar NOT NULL
  );
  
  CREATE TABLE "pages" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"name" varchar,
  	"slug" varchar,
  	"slug_lock" boolean DEFAULT true,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"_status" "enum_pages_status" DEFAULT 'draft'
  );
  
  CREATE TABLE "pages_locales" (
  	"meta_title" varchar,
  	"meta_description" varchar,
  	"meta_image_id" integer,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" integer NOT NULL
  );
  
  CREATE TABLE "_pages_v_blocks_text_content" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"image_id" integer,
  	"alignment" "enum__pages_v_blocks_text_content_alignment" DEFAULT 'left',
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "_pages_v_blocks_text_content_locales" (
  	"under_title" varchar,
  	"title" varchar,
  	"content" jsonb,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" integer NOT NULL
  );
  
  CREATE TABLE "_pages_v_blocks_form_builder_fields_options" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"value" varchar,
  	"_uuid" varchar
  );
  
  CREATE TABLE "_pages_v_blocks_form_builder_fields_options_locales" (
  	"label" varchar,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" integer NOT NULL
  );
  
  CREATE TABLE "_pages_v_blocks_form_builder_fields" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"field_type" "enum__pages_v_blocks_form_builder_fields_field_type",
  	"required" boolean DEFAULT false,
  	"_uuid" varchar
  );
  
  CREATE TABLE "_pages_v_blocks_form_builder_fields_locales" (
  	"label" varchar,
  	"placeholder" varchar,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" integer NOT NULL
  );
  
  CREATE TABLE "_pages_v_blocks_form_builder" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"show_submit_button" boolean DEFAULT true,
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "_pages_v_blocks_form_builder_locales" (
  	"title" varchar,
  	"description" varchar,
  	"submit_button_text" varchar DEFAULT 'Submit',
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" integer NOT NULL
  );
  
  CREATE TABLE "_pages_v" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"parent_id" integer,
  	"version_name" varchar,
  	"version_slug" varchar,
  	"version_slug_lock" boolean DEFAULT true,
  	"version_updated_at" timestamp(3) with time zone,
  	"version_created_at" timestamp(3) with time zone,
  	"version__status" "enum__pages_v_version_status" DEFAULT 'draft',
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"snapshot" boolean,
  	"published_locale" "enum__pages_v_published_locale",
  	"latest" boolean,
  	"autosave" boolean
  );
  
  CREATE TABLE "_pages_v_locales" (
  	"version_meta_title" varchar,
  	"version_meta_description" varchar,
  	"version_meta_image_id" integer,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" integer NOT NULL
  );
  
  CREATE TABLE "media" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"prefix" varchar DEFAULT 'media',
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"url" varchar,
  	"thumbnail_u_r_l" varchar,
  	"filename" varchar,
  	"mime_type" varchar,
  	"filesize" numeric,
  	"width" numeric,
  	"height" numeric,
  	"focal_x" numeric,
  	"focal_y" numeric
  );
  
  CREATE TABLE "media_locales" (
  	"alt" varchar DEFAULT 'image',
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" integer NOT NULL
  );
  
  CREATE TABLE "users" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"name" varchar,
  	"role" "role" DEFAULT 'admin',
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"email" varchar NOT NULL,
  	"reset_password_token" varchar,
  	"reset_password_expiration" timestamp(3) with time zone,
  	"salt" varchar,
  	"hash" varchar,
  	"login_attempts" numeric DEFAULT 0,
  	"lock_until" timestamp(3) with time zone
  );
  
  CREATE TABLE "payload_locked_documents" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"global_slug" varchar,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL
  );
  
  CREATE TABLE "payload_locked_documents_rels" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"order" integer,
  	"parent_id" integer NOT NULL,
  	"path" varchar NOT NULL,
  	"layout_id" integer,
  	"pages_id" integer,
  	"media_id" integer,
  	"users_id" integer
  );
  
  CREATE TABLE "payload_preferences" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"key" varchar,
  	"value" jsonb,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL
  );
  
  CREATE TABLE "payload_preferences_rels" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"order" integer,
  	"parent_id" integer NOT NULL,
  	"path" varchar NOT NULL,
  	"users_id" integer
  );
  
  CREATE TABLE "payload_migrations" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"name" varchar,
  	"batch" numeric,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL
  );
  
  ALTER TABLE "layout_blocks_header_navigation_links" ADD CONSTRAINT "layout_blocks_header_navigation_links_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."layout_blocks_header_navigation"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "layout_blocks_header_navigation_links_locales" ADD CONSTRAINT "layout_blocks_header_navigation_links_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."layout_blocks_header_navigation_links"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "layout_blocks_header_navigation" ADD CONSTRAINT "layout_blocks_header_navigation_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."layout_blocks_header"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "layout_blocks_header_navigation_locales" ADD CONSTRAINT "layout_blocks_header_navigation_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."layout_blocks_header_navigation"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "layout_blocks_header_buttons" ADD CONSTRAINT "layout_blocks_header_buttons_icon_id_media_id_fk" FOREIGN KEY ("icon_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "layout_blocks_header_buttons" ADD CONSTRAINT "layout_blocks_header_buttons_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."layout_blocks_header"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "layout_blocks_header_buttons_locales" ADD CONSTRAINT "layout_blocks_header_buttons_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."layout_blocks_header_buttons"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "layout_blocks_header" ADD CONSTRAINT "layout_blocks_header_logo_id_media_id_fk" FOREIGN KEY ("logo_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "layout_blocks_header" ADD CONSTRAINT "layout_blocks_header_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."layout"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "layout_blocks_footer_menu_columns_links" ADD CONSTRAINT "layout_blocks_footer_menu_columns_links_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."layout_blocks_footer_menu_columns"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "layout_blocks_footer_menu_columns_links_locales" ADD CONSTRAINT "layout_blocks_footer_menu_columns_links_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."layout_blocks_footer_menu_columns_links"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "layout_blocks_footer_menu_columns" ADD CONSTRAINT "layout_blocks_footer_menu_columns_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."layout_blocks_footer"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "layout_blocks_footer_menu_columns_locales" ADD CONSTRAINT "layout_blocks_footer_menu_columns_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."layout_blocks_footer_menu_columns"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "layout_blocks_footer" ADD CONSTRAINT "layout_blocks_footer_logo_id_media_id_fk" FOREIGN KEY ("logo_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "layout_blocks_footer" ADD CONSTRAINT "layout_blocks_footer_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."layout"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "layout_blocks_footer_locales" ADD CONSTRAINT "layout_blocks_footer_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."layout_blocks_footer"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "layout_locales" ADD CONSTRAINT "layout_locales_meta_image_id_media_id_fk" FOREIGN KEY ("meta_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "layout_locales" ADD CONSTRAINT "layout_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."layout"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_layout_v_blocks_header_navigation_links" ADD CONSTRAINT "_layout_v_blocks_header_navigation_links_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_layout_v_blocks_header_navigation"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_layout_v_blocks_header_navigation_links_locales" ADD CONSTRAINT "_layout_v_blocks_header_navigation_links_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_layout_v_blocks_header_navigation_links"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_layout_v_blocks_header_navigation" ADD CONSTRAINT "_layout_v_blocks_header_navigation_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_layout_v_blocks_header"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_layout_v_blocks_header_navigation_locales" ADD CONSTRAINT "_layout_v_blocks_header_navigation_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_layout_v_blocks_header_navigation"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_layout_v_blocks_header_buttons" ADD CONSTRAINT "_layout_v_blocks_header_buttons_icon_id_media_id_fk" FOREIGN KEY ("icon_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "_layout_v_blocks_header_buttons" ADD CONSTRAINT "_layout_v_blocks_header_buttons_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_layout_v_blocks_header"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_layout_v_blocks_header_buttons_locales" ADD CONSTRAINT "_layout_v_blocks_header_buttons_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_layout_v_blocks_header_buttons"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_layout_v_blocks_header" ADD CONSTRAINT "_layout_v_blocks_header_logo_id_media_id_fk" FOREIGN KEY ("logo_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "_layout_v_blocks_header" ADD CONSTRAINT "_layout_v_blocks_header_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_layout_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_layout_v_blocks_footer_menu_columns_links" ADD CONSTRAINT "_layout_v_blocks_footer_menu_columns_links_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_layout_v_blocks_footer_menu_columns"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_layout_v_blocks_footer_menu_columns_links_locales" ADD CONSTRAINT "_layout_v_blocks_footer_menu_columns_links_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_layout_v_blocks_footer_menu_columns_links"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_layout_v_blocks_footer_menu_columns" ADD CONSTRAINT "_layout_v_blocks_footer_menu_columns_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_layout_v_blocks_footer"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_layout_v_blocks_footer_menu_columns_locales" ADD CONSTRAINT "_layout_v_blocks_footer_menu_columns_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_layout_v_blocks_footer_menu_columns"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_layout_v_blocks_footer" ADD CONSTRAINT "_layout_v_blocks_footer_logo_id_media_id_fk" FOREIGN KEY ("logo_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "_layout_v_blocks_footer" ADD CONSTRAINT "_layout_v_blocks_footer_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_layout_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_layout_v_blocks_footer_locales" ADD CONSTRAINT "_layout_v_blocks_footer_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_layout_v_blocks_footer"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_layout_v" ADD CONSTRAINT "_layout_v_parent_id_layout_id_fk" FOREIGN KEY ("parent_id") REFERENCES "public"."layout"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "_layout_v_locales" ADD CONSTRAINT "_layout_v_locales_version_meta_image_id_media_id_fk" FOREIGN KEY ("version_meta_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "_layout_v_locales" ADD CONSTRAINT "_layout_v_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_layout_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_text_content" ADD CONSTRAINT "pages_blocks_text_content_image_id_media_id_fk" FOREIGN KEY ("image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "pages_blocks_text_content" ADD CONSTRAINT "pages_blocks_text_content_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_text_content_locales" ADD CONSTRAINT "pages_blocks_text_content_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages_blocks_text_content"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_form_builder_fields_options" ADD CONSTRAINT "pages_blocks_form_builder_fields_options_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages_blocks_form_builder_fields"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_form_builder_fields_options_locales" ADD CONSTRAINT "pages_blocks_form_builder_fields_options_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages_blocks_form_builder_fields_options"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_form_builder_fields" ADD CONSTRAINT "pages_blocks_form_builder_fields_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages_blocks_form_builder"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_form_builder_fields_locales" ADD CONSTRAINT "pages_blocks_form_builder_fields_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages_blocks_form_builder_fields"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_form_builder" ADD CONSTRAINT "pages_blocks_form_builder_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_form_builder_locales" ADD CONSTRAINT "pages_blocks_form_builder_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages_blocks_form_builder"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_locales" ADD CONSTRAINT "pages_locales_meta_image_id_media_id_fk" FOREIGN KEY ("meta_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "pages_locales" ADD CONSTRAINT "pages_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_text_content" ADD CONSTRAINT "_pages_v_blocks_text_content_image_id_media_id_fk" FOREIGN KEY ("image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_text_content" ADD CONSTRAINT "_pages_v_blocks_text_content_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_text_content_locales" ADD CONSTRAINT "_pages_v_blocks_text_content_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v_blocks_text_content"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_form_builder_fields_options" ADD CONSTRAINT "_pages_v_blocks_form_builder_fields_options_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v_blocks_form_builder_fields"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_form_builder_fields_options_locales" ADD CONSTRAINT "_pages_v_blocks_form_builder_fields_options_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v_blocks_form_builder_fields_options"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_form_builder_fields" ADD CONSTRAINT "_pages_v_blocks_form_builder_fields_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v_blocks_form_builder"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_form_builder_fields_locales" ADD CONSTRAINT "_pages_v_blocks_form_builder_fields_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v_blocks_form_builder_fields"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_form_builder" ADD CONSTRAINT "_pages_v_blocks_form_builder_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_form_builder_locales" ADD CONSTRAINT "_pages_v_blocks_form_builder_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v_blocks_form_builder"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v" ADD CONSTRAINT "_pages_v_parent_id_pages_id_fk" FOREIGN KEY ("parent_id") REFERENCES "public"."pages"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "_pages_v_locales" ADD CONSTRAINT "_pages_v_locales_version_meta_image_id_media_id_fk" FOREIGN KEY ("version_meta_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "_pages_v_locales" ADD CONSTRAINT "_pages_v_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "media_locales" ADD CONSTRAINT "media_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."media"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "payload_locked_documents_rels" ADD CONSTRAINT "payload_locked_documents_rels_parent_fk" FOREIGN KEY ("parent_id") REFERENCES "public"."payload_locked_documents"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "payload_locked_documents_rels" ADD CONSTRAINT "payload_locked_documents_rels_layout_fk" FOREIGN KEY ("layout_id") REFERENCES "public"."layout"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "payload_locked_documents_rels" ADD CONSTRAINT "payload_locked_documents_rels_pages_fk" FOREIGN KEY ("pages_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "payload_locked_documents_rels" ADD CONSTRAINT "payload_locked_documents_rels_media_fk" FOREIGN KEY ("media_id") REFERENCES "public"."media"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "payload_locked_documents_rels" ADD CONSTRAINT "payload_locked_documents_rels_users_fk" FOREIGN KEY ("users_id") REFERENCES "public"."users"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "payload_preferences_rels" ADD CONSTRAINT "payload_preferences_rels_parent_fk" FOREIGN KEY ("parent_id") REFERENCES "public"."payload_preferences"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "payload_preferences_rels" ADD CONSTRAINT "payload_preferences_rels_users_fk" FOREIGN KEY ("users_id") REFERENCES "public"."users"("id") ON DELETE cascade ON UPDATE no action;
  CREATE INDEX "layout_blocks_header_navigation_links_order_idx" ON "layout_blocks_header_navigation_links" USING btree ("_order");
  CREATE INDEX "layout_blocks_header_navigation_links_parent_id_idx" ON "layout_blocks_header_navigation_links" USING btree ("_parent_id");
  CREATE UNIQUE INDEX "layout_blocks_header_navigation_links_locales_locale_parent_id_unique" ON "layout_blocks_header_navigation_links_locales" USING btree ("_locale","_parent_id");
  CREATE INDEX "layout_blocks_header_navigation_order_idx" ON "layout_blocks_header_navigation" USING btree ("_order");
  CREATE INDEX "layout_blocks_header_navigation_parent_id_idx" ON "layout_blocks_header_navigation" USING btree ("_parent_id");
  CREATE UNIQUE INDEX "layout_blocks_header_navigation_locales_locale_parent_id_unique" ON "layout_blocks_header_navigation_locales" USING btree ("_locale","_parent_id");
  CREATE INDEX "layout_blocks_header_buttons_order_idx" ON "layout_blocks_header_buttons" USING btree ("_order");
  CREATE INDEX "layout_blocks_header_buttons_parent_id_idx" ON "layout_blocks_header_buttons" USING btree ("_parent_id");
  CREATE INDEX "layout_blocks_header_buttons_icon_idx" ON "layout_blocks_header_buttons" USING btree ("icon_id");
  CREATE UNIQUE INDEX "layout_blocks_header_buttons_locales_locale_parent_id_unique" ON "layout_blocks_header_buttons_locales" USING btree ("_locale","_parent_id");
  CREATE INDEX "layout_blocks_header_order_idx" ON "layout_blocks_header" USING btree ("_order");
  CREATE INDEX "layout_blocks_header_parent_id_idx" ON "layout_blocks_header" USING btree ("_parent_id");
  CREATE INDEX "layout_blocks_header_path_idx" ON "layout_blocks_header" USING btree ("_path");
  CREATE INDEX "layout_blocks_header_logo_idx" ON "layout_blocks_header" USING btree ("logo_id");
  CREATE INDEX "layout_blocks_footer_menu_columns_links_order_idx" ON "layout_blocks_footer_menu_columns_links" USING btree ("_order");
  CREATE INDEX "layout_blocks_footer_menu_columns_links_parent_id_idx" ON "layout_blocks_footer_menu_columns_links" USING btree ("_parent_id");
  CREATE UNIQUE INDEX "layout_blocks_footer_menu_columns_links_locales_locale_parent_id_unique" ON "layout_blocks_footer_menu_columns_links_locales" USING btree ("_locale","_parent_id");
  CREATE INDEX "layout_blocks_footer_menu_columns_order_idx" ON "layout_blocks_footer_menu_columns" USING btree ("_order");
  CREATE INDEX "layout_blocks_footer_menu_columns_parent_id_idx" ON "layout_blocks_footer_menu_columns" USING btree ("_parent_id");
  CREATE UNIQUE INDEX "layout_blocks_footer_menu_columns_locales_locale_parent_id_unique" ON "layout_blocks_footer_menu_columns_locales" USING btree ("_locale","_parent_id");
  CREATE INDEX "layout_blocks_footer_order_idx" ON "layout_blocks_footer" USING btree ("_order");
  CREATE INDEX "layout_blocks_footer_parent_id_idx" ON "layout_blocks_footer" USING btree ("_parent_id");
  CREATE INDEX "layout_blocks_footer_path_idx" ON "layout_blocks_footer" USING btree ("_path");
  CREATE INDEX "layout_blocks_footer_logo_idx" ON "layout_blocks_footer" USING btree ("logo_id");
  CREATE UNIQUE INDEX "layout_blocks_footer_locales_locale_parent_id_unique" ON "layout_blocks_footer_locales" USING btree ("_locale","_parent_id");
  CREATE INDEX "layout_slug_idx" ON "layout" USING btree ("slug");
  CREATE INDEX "layout_updated_at_idx" ON "layout" USING btree ("updated_at");
  CREATE INDEX "layout_created_at_idx" ON "layout" USING btree ("created_at");
  CREATE INDEX "layout__status_idx" ON "layout" USING btree ("_status");
  CREATE INDEX "layout_meta_meta_image_idx" ON "layout_locales" USING btree ("meta_image_id","_locale");
  CREATE UNIQUE INDEX "layout_locales_locale_parent_id_unique" ON "layout_locales" USING btree ("_locale","_parent_id");
  CREATE INDEX "_layout_v_blocks_header_navigation_links_order_idx" ON "_layout_v_blocks_header_navigation_links" USING btree ("_order");
  CREATE INDEX "_layout_v_blocks_header_navigation_links_parent_id_idx" ON "_layout_v_blocks_header_navigation_links" USING btree ("_parent_id");
  CREATE UNIQUE INDEX "_layout_v_blocks_header_navigation_links_locales_locale_parent_id_unique" ON "_layout_v_blocks_header_navigation_links_locales" USING btree ("_locale","_parent_id");
  CREATE INDEX "_layout_v_blocks_header_navigation_order_idx" ON "_layout_v_blocks_header_navigation" USING btree ("_order");
  CREATE INDEX "_layout_v_blocks_header_navigation_parent_id_idx" ON "_layout_v_blocks_header_navigation" USING btree ("_parent_id");
  CREATE UNIQUE INDEX "_layout_v_blocks_header_navigation_locales_locale_parent_id_unique" ON "_layout_v_blocks_header_navigation_locales" USING btree ("_locale","_parent_id");
  CREATE INDEX "_layout_v_blocks_header_buttons_order_idx" ON "_layout_v_blocks_header_buttons" USING btree ("_order");
  CREATE INDEX "_layout_v_blocks_header_buttons_parent_id_idx" ON "_layout_v_blocks_header_buttons" USING btree ("_parent_id");
  CREATE INDEX "_layout_v_blocks_header_buttons_icon_idx" ON "_layout_v_blocks_header_buttons" USING btree ("icon_id");
  CREATE UNIQUE INDEX "_layout_v_blocks_header_buttons_locales_locale_parent_id_unique" ON "_layout_v_blocks_header_buttons_locales" USING btree ("_locale","_parent_id");
  CREATE INDEX "_layout_v_blocks_header_order_idx" ON "_layout_v_blocks_header" USING btree ("_order");
  CREATE INDEX "_layout_v_blocks_header_parent_id_idx" ON "_layout_v_blocks_header" USING btree ("_parent_id");
  CREATE INDEX "_layout_v_blocks_header_path_idx" ON "_layout_v_blocks_header" USING btree ("_path");
  CREATE INDEX "_layout_v_blocks_header_logo_idx" ON "_layout_v_blocks_header" USING btree ("logo_id");
  CREATE INDEX "_layout_v_blocks_footer_menu_columns_links_order_idx" ON "_layout_v_blocks_footer_menu_columns_links" USING btree ("_order");
  CREATE INDEX "_layout_v_blocks_footer_menu_columns_links_parent_id_idx" ON "_layout_v_blocks_footer_menu_columns_links" USING btree ("_parent_id");
  CREATE UNIQUE INDEX "_layout_v_blocks_footer_menu_columns_links_locales_locale_parent_id_unique" ON "_layout_v_blocks_footer_menu_columns_links_locales" USING btree ("_locale","_parent_id");
  CREATE INDEX "_layout_v_blocks_footer_menu_columns_order_idx" ON "_layout_v_blocks_footer_menu_columns" USING btree ("_order");
  CREATE INDEX "_layout_v_blocks_footer_menu_columns_parent_id_idx" ON "_layout_v_blocks_footer_menu_columns" USING btree ("_parent_id");
  CREATE UNIQUE INDEX "_layout_v_blocks_footer_menu_columns_locales_locale_parent_id_unique" ON "_layout_v_blocks_footer_menu_columns_locales" USING btree ("_locale","_parent_id");
  CREATE INDEX "_layout_v_blocks_footer_order_idx" ON "_layout_v_blocks_footer" USING btree ("_order");
  CREATE INDEX "_layout_v_blocks_footer_parent_id_idx" ON "_layout_v_blocks_footer" USING btree ("_parent_id");
  CREATE INDEX "_layout_v_blocks_footer_path_idx" ON "_layout_v_blocks_footer" USING btree ("_path");
  CREATE INDEX "_layout_v_blocks_footer_logo_idx" ON "_layout_v_blocks_footer" USING btree ("logo_id");
  CREATE UNIQUE INDEX "_layout_v_blocks_footer_locales_locale_parent_id_unique" ON "_layout_v_blocks_footer_locales" USING btree ("_locale","_parent_id");
  CREATE INDEX "_layout_v_parent_idx" ON "_layout_v" USING btree ("parent_id");
  CREATE INDEX "_layout_v_version_version_slug_idx" ON "_layout_v" USING btree ("version_slug");
  CREATE INDEX "_layout_v_version_version_updated_at_idx" ON "_layout_v" USING btree ("version_updated_at");
  CREATE INDEX "_layout_v_version_version_created_at_idx" ON "_layout_v" USING btree ("version_created_at");
  CREATE INDEX "_layout_v_version_version__status_idx" ON "_layout_v" USING btree ("version__status");
  CREATE INDEX "_layout_v_created_at_idx" ON "_layout_v" USING btree ("created_at");
  CREATE INDEX "_layout_v_updated_at_idx" ON "_layout_v" USING btree ("updated_at");
  CREATE INDEX "_layout_v_snapshot_idx" ON "_layout_v" USING btree ("snapshot");
  CREATE INDEX "_layout_v_published_locale_idx" ON "_layout_v" USING btree ("published_locale");
  CREATE INDEX "_layout_v_latest_idx" ON "_layout_v" USING btree ("latest");
  CREATE INDEX "_layout_v_autosave_idx" ON "_layout_v" USING btree ("autosave");
  CREATE INDEX "_layout_v_version_meta_version_meta_image_idx" ON "_layout_v_locales" USING btree ("version_meta_image_id","_locale");
  CREATE UNIQUE INDEX "_layout_v_locales_locale_parent_id_unique" ON "_layout_v_locales" USING btree ("_locale","_parent_id");
  CREATE INDEX "pages_blocks_text_content_order_idx" ON "pages_blocks_text_content" USING btree ("_order");
  CREATE INDEX "pages_blocks_text_content_parent_id_idx" ON "pages_blocks_text_content" USING btree ("_parent_id");
  CREATE INDEX "pages_blocks_text_content_path_idx" ON "pages_blocks_text_content" USING btree ("_path");
  CREATE INDEX "pages_blocks_text_content_image_idx" ON "pages_blocks_text_content" USING btree ("image_id");
  CREATE UNIQUE INDEX "pages_blocks_text_content_locales_locale_parent_id_unique" ON "pages_blocks_text_content_locales" USING btree ("_locale","_parent_id");
  CREATE INDEX "pages_blocks_form_builder_fields_options_order_idx" ON "pages_blocks_form_builder_fields_options" USING btree ("_order");
  CREATE INDEX "pages_blocks_form_builder_fields_options_parent_id_idx" ON "pages_blocks_form_builder_fields_options" USING btree ("_parent_id");
  CREATE UNIQUE INDEX "pages_blocks_form_builder_fields_options_locales_locale_parent_id_unique" ON "pages_blocks_form_builder_fields_options_locales" USING btree ("_locale","_parent_id");
  CREATE INDEX "pages_blocks_form_builder_fields_order_idx" ON "pages_blocks_form_builder_fields" USING btree ("_order");
  CREATE INDEX "pages_blocks_form_builder_fields_parent_id_idx" ON "pages_blocks_form_builder_fields" USING btree ("_parent_id");
  CREATE UNIQUE INDEX "pages_blocks_form_builder_fields_locales_locale_parent_id_unique" ON "pages_blocks_form_builder_fields_locales" USING btree ("_locale","_parent_id");
  CREATE INDEX "pages_blocks_form_builder_order_idx" ON "pages_blocks_form_builder" USING btree ("_order");
  CREATE INDEX "pages_blocks_form_builder_parent_id_idx" ON "pages_blocks_form_builder" USING btree ("_parent_id");
  CREATE INDEX "pages_blocks_form_builder_path_idx" ON "pages_blocks_form_builder" USING btree ("_path");
  CREATE UNIQUE INDEX "pages_blocks_form_builder_locales_locale_parent_id_unique" ON "pages_blocks_form_builder_locales" USING btree ("_locale","_parent_id");
  CREATE INDEX "pages_slug_idx" ON "pages" USING btree ("slug");
  CREATE INDEX "pages_updated_at_idx" ON "pages" USING btree ("updated_at");
  CREATE INDEX "pages_created_at_idx" ON "pages" USING btree ("created_at");
  CREATE INDEX "pages__status_idx" ON "pages" USING btree ("_status");
  CREATE INDEX "pages_meta_meta_image_idx" ON "pages_locales" USING btree ("meta_image_id","_locale");
  CREATE UNIQUE INDEX "pages_locales_locale_parent_id_unique" ON "pages_locales" USING btree ("_locale","_parent_id");
  CREATE INDEX "_pages_v_blocks_text_content_order_idx" ON "_pages_v_blocks_text_content" USING btree ("_order");
  CREATE INDEX "_pages_v_blocks_text_content_parent_id_idx" ON "_pages_v_blocks_text_content" USING btree ("_parent_id");
  CREATE INDEX "_pages_v_blocks_text_content_path_idx" ON "_pages_v_blocks_text_content" USING btree ("_path");
  CREATE INDEX "_pages_v_blocks_text_content_image_idx" ON "_pages_v_blocks_text_content" USING btree ("image_id");
  CREATE UNIQUE INDEX "_pages_v_blocks_text_content_locales_locale_parent_id_unique" ON "_pages_v_blocks_text_content_locales" USING btree ("_locale","_parent_id");
  CREATE INDEX "_pages_v_blocks_form_builder_fields_options_order_idx" ON "_pages_v_blocks_form_builder_fields_options" USING btree ("_order");
  CREATE INDEX "_pages_v_blocks_form_builder_fields_options_parent_id_idx" ON "_pages_v_blocks_form_builder_fields_options" USING btree ("_parent_id");
  CREATE UNIQUE INDEX "_pages_v_blocks_form_builder_fields_options_locales_locale_parent_id_unique" ON "_pages_v_blocks_form_builder_fields_options_locales" USING btree ("_locale","_parent_id");
  CREATE INDEX "_pages_v_blocks_form_builder_fields_order_idx" ON "_pages_v_blocks_form_builder_fields" USING btree ("_order");
  CREATE INDEX "_pages_v_blocks_form_builder_fields_parent_id_idx" ON "_pages_v_blocks_form_builder_fields" USING btree ("_parent_id");
  CREATE UNIQUE INDEX "_pages_v_blocks_form_builder_fields_locales_locale_parent_id_unique" ON "_pages_v_blocks_form_builder_fields_locales" USING btree ("_locale","_parent_id");
  CREATE INDEX "_pages_v_blocks_form_builder_order_idx" ON "_pages_v_blocks_form_builder" USING btree ("_order");
  CREATE INDEX "_pages_v_blocks_form_builder_parent_id_idx" ON "_pages_v_blocks_form_builder" USING btree ("_parent_id");
  CREATE INDEX "_pages_v_blocks_form_builder_path_idx" ON "_pages_v_blocks_form_builder" USING btree ("_path");
  CREATE UNIQUE INDEX "_pages_v_blocks_form_builder_locales_locale_parent_id_unique" ON "_pages_v_blocks_form_builder_locales" USING btree ("_locale","_parent_id");
  CREATE INDEX "_pages_v_parent_idx" ON "_pages_v" USING btree ("parent_id");
  CREATE INDEX "_pages_v_version_version_slug_idx" ON "_pages_v" USING btree ("version_slug");
  CREATE INDEX "_pages_v_version_version_updated_at_idx" ON "_pages_v" USING btree ("version_updated_at");
  CREATE INDEX "_pages_v_version_version_created_at_idx" ON "_pages_v" USING btree ("version_created_at");
  CREATE INDEX "_pages_v_version_version__status_idx" ON "_pages_v" USING btree ("version__status");
  CREATE INDEX "_pages_v_created_at_idx" ON "_pages_v" USING btree ("created_at");
  CREATE INDEX "_pages_v_updated_at_idx" ON "_pages_v" USING btree ("updated_at");
  CREATE INDEX "_pages_v_snapshot_idx" ON "_pages_v" USING btree ("snapshot");
  CREATE INDEX "_pages_v_published_locale_idx" ON "_pages_v" USING btree ("published_locale");
  CREATE INDEX "_pages_v_latest_idx" ON "_pages_v" USING btree ("latest");
  CREATE INDEX "_pages_v_autosave_idx" ON "_pages_v" USING btree ("autosave");
  CREATE INDEX "_pages_v_version_meta_version_meta_image_idx" ON "_pages_v_locales" USING btree ("version_meta_image_id","_locale");
  CREATE UNIQUE INDEX "_pages_v_locales_locale_parent_id_unique" ON "_pages_v_locales" USING btree ("_locale","_parent_id");
  CREATE INDEX "media_updated_at_idx" ON "media" USING btree ("updated_at");
  CREATE INDEX "media_created_at_idx" ON "media" USING btree ("created_at");
  CREATE UNIQUE INDEX "media_filename_idx" ON "media" USING btree ("filename");
  CREATE UNIQUE INDEX "media_locales_locale_parent_id_unique" ON "media_locales" USING btree ("_locale","_parent_id");
  CREATE INDEX "users_updated_at_idx" ON "users" USING btree ("updated_at");
  CREATE INDEX "users_created_at_idx" ON "users" USING btree ("created_at");
  CREATE UNIQUE INDEX "users_email_idx" ON "users" USING btree ("email");
  CREATE INDEX "payload_locked_documents_global_slug_idx" ON "payload_locked_documents" USING btree ("global_slug");
  CREATE INDEX "payload_locked_documents_updated_at_idx" ON "payload_locked_documents" USING btree ("updated_at");
  CREATE INDEX "payload_locked_documents_created_at_idx" ON "payload_locked_documents" USING btree ("created_at");
  CREATE INDEX "payload_locked_documents_rels_order_idx" ON "payload_locked_documents_rels" USING btree ("order");
  CREATE INDEX "payload_locked_documents_rels_parent_idx" ON "payload_locked_documents_rels" USING btree ("parent_id");
  CREATE INDEX "payload_locked_documents_rels_path_idx" ON "payload_locked_documents_rels" USING btree ("path");
  CREATE INDEX "payload_locked_documents_rels_layout_id_idx" ON "payload_locked_documents_rels" USING btree ("layout_id");
  CREATE INDEX "payload_locked_documents_rels_pages_id_idx" ON "payload_locked_documents_rels" USING btree ("pages_id");
  CREATE INDEX "payload_locked_documents_rels_media_id_idx" ON "payload_locked_documents_rels" USING btree ("media_id");
  CREATE INDEX "payload_locked_documents_rels_users_id_idx" ON "payload_locked_documents_rels" USING btree ("users_id");
  CREATE INDEX "payload_preferences_key_idx" ON "payload_preferences" USING btree ("key");
  CREATE INDEX "payload_preferences_updated_at_idx" ON "payload_preferences" USING btree ("updated_at");
  CREATE INDEX "payload_preferences_created_at_idx" ON "payload_preferences" USING btree ("created_at");
  CREATE INDEX "payload_preferences_rels_order_idx" ON "payload_preferences_rels" USING btree ("order");
  CREATE INDEX "payload_preferences_rels_parent_idx" ON "payload_preferences_rels" USING btree ("parent_id");
  CREATE INDEX "payload_preferences_rels_path_idx" ON "payload_preferences_rels" USING btree ("path");
  CREATE INDEX "payload_preferences_rels_users_id_idx" ON "payload_preferences_rels" USING btree ("users_id");
  CREATE INDEX "payload_migrations_updated_at_idx" ON "payload_migrations" USING btree ("updated_at");
  CREATE INDEX "payload_migrations_created_at_idx" ON "payload_migrations" USING btree ("created_at");`)
}

export async function down({ db, payload, req }: MigrateDownArgs): Promise<void> {
  await db.execute(sql`
   DROP TABLE "layout_blocks_header_navigation_links" CASCADE;
  DROP TABLE "layout_blocks_header_navigation_links_locales" CASCADE;
  DROP TABLE "layout_blocks_header_navigation" CASCADE;
  DROP TABLE "layout_blocks_header_navigation_locales" CASCADE;
  DROP TABLE "layout_blocks_header_buttons" CASCADE;
  DROP TABLE "layout_blocks_header_buttons_locales" CASCADE;
  DROP TABLE "layout_blocks_header" CASCADE;
  DROP TABLE "layout_blocks_footer_menu_columns_links" CASCADE;
  DROP TABLE "layout_blocks_footer_menu_columns_links_locales" CASCADE;
  DROP TABLE "layout_blocks_footer_menu_columns" CASCADE;
  DROP TABLE "layout_blocks_footer_menu_columns_locales" CASCADE;
  DROP TABLE "layout_blocks_footer" CASCADE;
  DROP TABLE "layout_blocks_footer_locales" CASCADE;
  DROP TABLE "layout" CASCADE;
  DROP TABLE "layout_locales" CASCADE;
  DROP TABLE "_layout_v_blocks_header_navigation_links" CASCADE;
  DROP TABLE "_layout_v_blocks_header_navigation_links_locales" CASCADE;
  DROP TABLE "_layout_v_blocks_header_navigation" CASCADE;
  DROP TABLE "_layout_v_blocks_header_navigation_locales" CASCADE;
  DROP TABLE "_layout_v_blocks_header_buttons" CASCADE;
  DROP TABLE "_layout_v_blocks_header_buttons_locales" CASCADE;
  DROP TABLE "_layout_v_blocks_header" CASCADE;
  DROP TABLE "_layout_v_blocks_footer_menu_columns_links" CASCADE;
  DROP TABLE "_layout_v_blocks_footer_menu_columns_links_locales" CASCADE;
  DROP TABLE "_layout_v_blocks_footer_menu_columns" CASCADE;
  DROP TABLE "_layout_v_blocks_footer_menu_columns_locales" CASCADE;
  DROP TABLE "_layout_v_blocks_footer" CASCADE;
  DROP TABLE "_layout_v_blocks_footer_locales" CASCADE;
  DROP TABLE "_layout_v" CASCADE;
  DROP TABLE "_layout_v_locales" CASCADE;
  DROP TABLE "pages_blocks_text_content" CASCADE;
  DROP TABLE "pages_blocks_text_content_locales" CASCADE;
  DROP TABLE "pages_blocks_form_builder_fields_options" CASCADE;
  DROP TABLE "pages_blocks_form_builder_fields_options_locales" CASCADE;
  DROP TABLE "pages_blocks_form_builder_fields" CASCADE;
  DROP TABLE "pages_blocks_form_builder_fields_locales" CASCADE;
  DROP TABLE "pages_blocks_form_builder" CASCADE;
  DROP TABLE "pages_blocks_form_builder_locales" CASCADE;
  DROP TABLE "pages" CASCADE;
  DROP TABLE "pages_locales" CASCADE;
  DROP TABLE "_pages_v_blocks_text_content" CASCADE;
  DROP TABLE "_pages_v_blocks_text_content_locales" CASCADE;
  DROP TABLE "_pages_v_blocks_form_builder_fields_options" CASCADE;
  DROP TABLE "_pages_v_blocks_form_builder_fields_options_locales" CASCADE;
  DROP TABLE "_pages_v_blocks_form_builder_fields" CASCADE;
  DROP TABLE "_pages_v_blocks_form_builder_fields_locales" CASCADE;
  DROP TABLE "_pages_v_blocks_form_builder" CASCADE;
  DROP TABLE "_pages_v_blocks_form_builder_locales" CASCADE;
  DROP TABLE "_pages_v" CASCADE;
  DROP TABLE "_pages_v_locales" CASCADE;
  DROP TABLE "media" CASCADE;
  DROP TABLE "media_locales" CASCADE;
  DROP TABLE "users" CASCADE;
  DROP TABLE "payload_locked_documents" CASCADE;
  DROP TABLE "payload_locked_documents_rels" CASCADE;
  DROP TABLE "payload_preferences" CASCADE;
  DROP TABLE "payload_preferences_rels" CASCADE;
  DROP TABLE "payload_migrations" CASCADE;
  DROP TYPE "public"."_locales";
  DROP TYPE "public"."enum_layout_blocks_footer_alignment";
  DROP TYPE "public"."enum_layout_status";
  DROP TYPE "public"."enum__layout_v_blocks_footer_alignment";
  DROP TYPE "public"."enum__layout_v_version_status";
  DROP TYPE "public"."enum__layout_v_published_locale";
  DROP TYPE "public"."enum_pages_blocks_text_content_alignment";
  DROP TYPE "public"."enum_pages_blocks_form_builder_fields_field_type";
  DROP TYPE "public"."enum_pages_status";
  DROP TYPE "public"."enum__pages_v_blocks_text_content_alignment";
  DROP TYPE "public"."enum__pages_v_blocks_form_builder_fields_field_type";
  DROP TYPE "public"."enum__pages_v_version_status";
  DROP TYPE "public"."enum__pages_v_published_locale";
  DROP TYPE "public"."role";`)
}
