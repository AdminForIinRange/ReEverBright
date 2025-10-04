// import type { Metadata } from "next"

// interface PageMetadataProps {
//   title: string
//   description: string
//   path: string
//   keywords?: string[]
//   ogImage?: string
//   noIndex?: boolean
// }

// export function generatePageMetadata({
//   title,
//   description,
//   path,
//   keywords = [],
//   ogImage = "/og-image.jpg",
//   noIndex = false,
// }: PageMetadataProps): Metadata {
//   const url = `https://www.luxemanagements.com${path}`

//   return {
//     title,
//     description,
//     keywords: [...keywords, "Airbnb Management Adelaide", "Property Management Adelaide", "Luxe Managements"],
//     alternates: {
//       canonical: url,
//     },
//     robots: {
//       index: !noIndex,
//       follow: !noIndex,
//     },
//     openGraph: {
//       title,
//       description,
//       url,
//       siteName: "Luxe Managements",
//       locale: "en_AU",
//       type: "website",
//       images: [
//         {
//           url: `https://www.luxemanagements.com${ogImage}`,
//           width: 1200,
//           height: 630,
//           alt: title,
//         },
//       ],
//     },
//     twitter: {
//       card: "summary_large_image",
//       title,
//       description,
//       images: [`https://www.luxemanagements.com${ogImage}`],
//     },
//   }
// }
