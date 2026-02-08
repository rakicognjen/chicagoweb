import { getPermalink, getBlogPermalink } from './utils/permalinks';

export const headerData = {
  links: [
    {
      text: 'Home',
      href: '/',
    },
    {
      text: 'Solutions',
      href: getPermalink('/law-firm-websites'),
      links: [
        { text: 'Law Firm Websites', href: getPermalink('/law-firm-websites') },
        { text: 'Brand Foundations', href: getPermalink('/law-firm-websites/brand-foundations') },
        { text: 'Design Sprints', href: getPermalink('/law-firm-websites/design-sprints') },
        { text: 'Conversion Assets', href: getPermalink('/law-firm-websites/conversion-assets') },
        { text: 'Care & Compliance', href: getPermalink('/law-firm-websites/care-plans') },
      ],
    },
    {
      text: 'SEO System',
      href: getPermalink('/law-firm-seo'),
      links: [
        { text: 'Overview', href: getPermalink('/law-firm-seo') },
        { text: 'Authority Build', href: getPermalink('/law-firm-seo/authority-build') },
        { text: 'Search Visibility', href: getPermalink('/law-firm-seo/search-visibility') },
        { text: 'Intake Ops', href: getPermalink('/law-firm-seo/intake-ops') },
      ],
    },
    {
      text: 'Blog',
      href: getBlogPermalink(),
    },
    {
      text: 'About',
      href: getPermalink('/about'),
    },
  ],
  actions: [{ text: 'Book intro call', href: getPermalink('/contact') }],
};

export const footerData = {
  links: [
    {
      title: 'Solutions',
      links: [
        { text: 'Law Firm Websites', href: getPermalink('/law-firm-websites') },
        { text: 'Brand Foundations', href: getPermalink('/law-firm-websites/brand-foundations') },
        { text: 'Design Sprints', href: getPermalink('/law-firm-websites/design-sprints') },
        { text: 'Conversion Assets', href: getPermalink('/law-firm-websites/conversion-assets') },
        { text: 'Care Plans', href: getPermalink('/law-firm-websites/care-plans') },
      ],
    },
    {
      title: 'SEO System',
      links: [
        { text: 'Overview', href: getPermalink('/law-firm-seo') },
        { text: 'Authority Build', href: getPermalink('/law-firm-seo/authority-build') },
        { text: 'Search Visibility', href: getPermalink('/law-firm-seo/search-visibility') },
        { text: 'Intake Ops', href: getPermalink('/law-firm-seo/intake-ops') },
      ],
    },
    {
      title: 'Company',
      links: [
        { text: 'About', href: getPermalink('/about') },
        { text: 'Blog', href: getBlogPermalink() },
        { text: 'Contact', href: getPermalink('/contact') },
      ],
    },
  ],
  secondaryLinks: [
    { text: 'Terms', href: getPermalink('/terms') },
    { text: 'Privacy Policy', href: getPermalink('/privacy') },
  ],
  socialLinks: [
    { ariaLabel: 'Facebook', icon: 'tabler:brand-facebook', href: 'https://www.facebook.com/alberto.selandari' },
  ],
  footNote: `Made by <a class="text-blue-600 underline dark:text-muted">Mali Macak</a> · All rights reserved.`,
};
