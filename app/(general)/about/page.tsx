import type { Metadata } from "next";


export const metadata: Metadata = {
 title: 'SEO Title',
 description: 'SEO Description',
 keywords: ['About Page', 'Fernando', 'información', '...']
};


export default function AboutPAge() {

    return (
        <>
            <span className="text-7xl">About Page</span>
        </>
    )

}