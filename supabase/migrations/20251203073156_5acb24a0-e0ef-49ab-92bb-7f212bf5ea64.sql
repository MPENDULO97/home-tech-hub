-- Fix search_path for update_updated_at_column function
CREATE OR REPLACE FUNCTION public.update_updated_at_column()
RETURNS TRIGGER
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path = public
AS $$
BEGIN
    NEW.updated_at = NOW();
    RETURN NEW;
END;
$$;

-- Fix search_path for increment_click_count function
CREATE OR REPLACE FUNCTION public.increment_click_count()
RETURNS TRIGGER
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path = public
AS $$
BEGIN
    IF NEW.retailer_category_id IS NOT NULL THEN
        UPDATE public.retailer_categories 
        SET click_count = click_count + 1 
        WHERE id = NEW.retailer_category_id;
    END IF;
    RETURN NEW;
END;
$$;