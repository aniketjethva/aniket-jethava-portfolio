export const profile = {
  name: 'Aniket Jethava',
  role: 'Magento Developer',
  tagline: ['Magento Developer', 'PHP Developer', 'MERN Stack Developer'],
  quote: 'Building robust, scalable and user-friendly eCommerce — from custom modules to a smooth checkout.',
  email: 'aniketjethava38@gmail.com',
  phone: '+91 90334 11362',
  github: 'https://github.com/aniketjethva',
  linkedin: 'https://linkedin.com/in/aniket-jethva-8a689a1b7/',
  resume: 'resume/Aniket_Jethva_Resume.pdf',
  about:
    'Highly skilled eCommerce developer with 2.10 years of expertise in Magento 2 and 1 year in Core PHP. I design and build robust, scalable eCommerce websites, with a strong focus on custom modules, third-party integrations and checkout experience. Based in Ahmedabad, India.',
};

export const stats = [
  { value: '3+', label: 'Years in web development' },
  { value: '6', label: 'Cabinetry eCommerce projects' },
  { value: 'Magento 2', label: 'Backend specialist' },
  { value: 'BCA', label: 'KSV University, 2021' },
];

export const technologies = [
  { title: 'Magento', items: ['Module Development', 'CMS', 'EAV Architecture', 'Third-party Modules', 'Custom Shipping', 'Email Templates', 'Cron Jobs'] },
  { title: 'Backend', items: ['PHP', 'Core PHP', 'OOPs', 'MVC', 'MySQL', 'REST API', 'Laravel', 'Node.js', 'Express', 'MongoDB'] },
  { title: 'Frontend', items: ['HTML', 'CSS', 'JavaScript', 'jQuery', 'Ajax', 'React JS', 'Angular JS'] },
  { title: 'Tools', items: ['Git', 'GitHub', 'Bitbucket', 'Jira', 'Authorize.Net'] },
];

export const experience = [
  {
    title: 'PHP Developer · Breezeway Tech, Ahmedabad',
    period: 'Mar 2025 – Oct 2026',
    points: [
      'Designed and developed RESTful APIs for seamless third-party integration.',
      'Built and maintained scalable web apps and internal tools with PHP and MySQL.',
      'Collaborated with front-end developers on responsive, user-friendly interfaces.',
      'Created eCommerce websites with third-party payment integration.',
    ],
  },
  {
    title: 'Magento Developer · Kitchen365, Ahmedabad',
    period: 'Aug 2022 – Oct 2024',
    points: [
      'Magento 2 backend developer for the kitchen industry, building client sites and in-house products.',
      'Implemented and optimized custom shipping methods.',
      'Zip code and phone number validation on checkout pages.',
      'Customized email templates and automated sending via cron jobs.',
      'Integrated third-party APIs and payment gateways (Authorize.Net) through custom modules.',
      'Worked with Git for version control and Jira for project tracking.',
    ],
  },
  {
    title: 'PHP Developer (Training) · TOPS Technologies, Ahmedabad',
    period: 'Jan 2020 – Jul 2021',
    points: ['PHP training and a Hotel Management System project.'],
  },
];

export const projects: { name: string; desc: string; url?: string }[] = [
  { name: 'Prime Cabinetry', desc: 'Magento 2 eCommerce store for kitchen cabinetry.', url: 'https://www.primecabinetry.com/' },
  { name: 'Home Mark Cabinets', desc: 'Magento 2 storefront with custom shipping and checkout validation.', url: 'https://www.homemarkcabinets.com/' },
  { name: 'Cabinet Distribution', desc: 'Cabinet eCommerce platform.' },
  { name: 'Store Kitchen 365', desc: 'In-house Kitchen365 store product.' },
  { name: 'Boger Cabinetry', desc: 'Client cabinetry website.' },
  { name: 'Haymor Cabinetry', desc: 'Client cabinetry website.' },
];
