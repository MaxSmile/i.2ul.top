// src/pages/i/[slug].jsx

import fs from "fs";
import { join } from "path";
import matter from "gray-matter";
import { remark } from "remark";
import html from "remark-html";
import { useRouter } from "next/router";
import { notFound } from "next/navigation";
import Layout from "./_layout";

import markdownStyles from "./markdown.module.css";
import Head from "next/head";

async function markdownToHtml(markdown) {
    const result = await remark().use(html).process(markdown);
    return result.toString();
}

const docsDirectory = join(process.cwd(), "docs");

export function getStaticPaths() {
    const filenames = fs.readdirSync(docsDirectory);
    const paths = filenames.map((filename) => ({
        params: { slug: filename.replace(/\.md$/, "") },
    }));

    return { paths, fallback: false };
}

export async function getStaticProps({ params }) {
    const { slug } = params;
    const fullPath = join(docsDirectory, `${slug}.md`);

    if (!fs.existsSync(fullPath)) {
        return { notFound: true };
    }

    const fileContents = fs.readFileSync(fullPath, "utf8");
    const { data, content } = matter(fileContents);
    const htmlContent = await markdownToHtml(content);

    return { props: { data, slug, content: htmlContent } };
}

export default function InfoPage({ content, slug, data }) {
    const router = useRouter();

    if (!content) {
        return notFound();
    }

    return (
        <Layout>
            <Head>
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{
                        __html: JSON.stringify({
                            "@context": "https://schema.org",
                            "@type": "Article",
                            "headline": data.title,
                            "description": data.description,
                            "datePublished": data.date,
                            "image": data.image,
                            "author": {
                                "@type": "Organization",
                                "name": "Vasilkoff Ltd"
                            },
                            "url": `https://2ul.top/i/${slug}`,
                        }),
                    }}
                />
                <meta name="description" content={data.description} />
                <meta name="keywords" content={data.keywords.join(",")} />



                <meta property="og:title" content={data.title} />
                <meta property="og:description" content={data.description} />
                <meta property="og:image" content={data.image} />
                <meta property="og:url" content={'/i/' + slug} />


                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content={data.title} />
                <meta name="twitter:description" content={data.description} />

            </Head>
            <section className="container mx-auto max-w-4xl px-4 py-8">
                <div className="">
                    <article className="py-20">
                        <div
                            className={markdownStyles["markdown"]}
                            id="content" dangerouslySetInnerHTML={{ __html: content }} />
                    </article>
                    <p className="text-sm text-gray-500">
                        Published on: {new Date(data.date).toDateString()}
                    </p>
                </div>
            </section>
        </Layout>
    );
}
