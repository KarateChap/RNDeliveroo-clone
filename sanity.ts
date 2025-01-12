import sanityClient, { createClient } from "@sanity/client";
import imageUrlBuilder from "@sanity/image-url";

const client = createClient({
  projectId: "meq9db15",
  dataset: "production",
  useCdn: true,
  apiVersion: "2025-01-12"
});

const builder = imageUrlBuilder(client);
export const urlFor = (source: any) => builder.image(source);

export default client;