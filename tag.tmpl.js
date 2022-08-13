export const layout = "layouts/tag.njk";

export default function* ({ search }) {
  for (const tag of search.tags()) {
    yield {
      url: `/tag/${tag.toLowerCase().replaceAll(" ", "-")}/`,
      title: `Tagged - ${tag}`,
      description: `Tagged - ${tag} - Tamil Copied Kavithai - Tamil Kavithai Site - Kavithai for Social Status and Stories.`,
      type: "tag",
      tag,
    };
  }
}
