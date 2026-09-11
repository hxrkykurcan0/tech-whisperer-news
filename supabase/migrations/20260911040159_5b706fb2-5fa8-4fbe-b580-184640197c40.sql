CREATE TABLE public.articles (
  id uuid NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  slug text NOT NULL UNIQUE,
  category_slug text NOT NULL,
  title text NOT NULL,
  body text[] NOT NULL DEFAULT '{}',
  image_url text,
  author text NOT NULL DEFAULT 'Ali Haydar Kurçan',
  published_at timestamptz NOT NULL DEFAULT now(),
  created_at timestamptz NOT NULL DEFAULT now()
);

GRANT SELECT ON public.articles TO anon;
GRANT SELECT ON public.articles TO authenticated;
GRANT ALL ON public.articles TO service_role;

ALTER TABLE public.articles ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Herkes haberleri okuyabilir"
  ON public.articles FOR SELECT
  TO anon, authenticated
  USING (true);

CREATE INDEX articles_category_slug_idx ON public.articles (category_slug);
CREATE INDEX articles_published_at_idx ON public.articles (published_at DESC);