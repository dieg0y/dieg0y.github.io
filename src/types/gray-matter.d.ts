/**
 * Type declarations for the `gray-matter` package (it ships no own types
 * and @types/gray-matter is unavailable in this registry).
 */
declare module "gray-matter" {
  interface GrayMatterFile {
    /** parsed frontmatter, empty object when the file has none */
    data: Record<string, unknown>;
    /** file contents without the frontmatter block */
    content: string;
    /** excerpt, only present when excerpt options are enabled */
    excerpt?: string;
    /** original input */
    orig?: string | Buffer;
  }

  function matter(
    source: string | Buffer,
    options?: Record<string, unknown>
  ): GrayMatterFile;

  export = matter;
}
