interface MetaEntry {
  name: string;
  value: string;
}

interface Section {
  title?: string;
  description?: string;
  introduction?: string;
  subtitle?: string;
  line2?: string;
  copyright?: string;
  componentlink?: string;

  // This is likely to contain more specific data, but we don't have that information.
  components?: Record<string, unknown>;
}

export interface SiteConfig {
  meta: MetaEntry[];
  global: Section;
  index: Section;
  components: Section;
  footer: Section;
}

export const config: SiteConfig = {
  meta: [
    {
      name: 'og:type',
      value: 'website',
    },
  ],

  global: {
    title: 'Global',
    description: 'Global settings for the site',
  },

  index: {
    introduction: "We'll be back.",
    subtitle: 'We are currently updating a few things,',
    line2: 'and the documentation site will be back online soon.',
  },

  components: {
    introduction: 'atlrdsgn/kit',
    subtitle: 'An ever expanding UI kit, for the disruptive.',

    components: {},
  },

  footer: {
    componentlink: '/components',
    copyright: '© 2023',
  },
};
