// Site-wide details.
export const site = {
  name: 'Amir Jebali',
  // Shown on one line under the name and in the browser tab title, joined with ' · '.
  roles: ['Picture editor', 'Sound editor'],
  description:
    'I cut pictures and I build sound. Based in Belgium, in post-production since 2017. Documentary, fiction, music videos.',
  bio: [
    'I cut pictures and I build sound. Based in Belgium, in post-production since 2017.',
    'Documentary, fiction, music videos. Some I edit, others I carry through sound, from editing to design to mix.',
    'Two schools for two crafts: ISAMM in Tunis, then editing and a master’s in film sound at IAD.',
    'And when a project needs it, I run the post too, conform to final delivery.',
  ],
  education: ['IAD, Belgium', 'ISAMM, Tunisia'],
  email: 'amirjebalipr@gmail.com',
  // Add { label: 'Instagram', url: 'https://www.instagram.com/<handle>/' } once Amir sends his profile address.
  socials: [] as { label: string; url: string }[],
  // Put the CV at public/cv.pdf, then set this to 'cv.pdf'.
  cv: undefined as string | undefined,
};
