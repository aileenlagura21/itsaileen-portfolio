/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

// TypeScript types converted to JavaScript object shapes for reference only
// These are JavaScript constants documenting the expected object structures

export const ProjectShape = {
  id: '',
  title: '',
  subtitle: '',
  description: '',
  longDescription: '',
  image: '',
  category: '', // 'web' | 'uiux' | 'branding' | 'development'
  tags: [],
  tools: [],
  client: '',
  date: '',
  liveUrl: '',
  githubUrl: '',
  role: '',
  features: []
};

export const ServiceShape = {
  id: '',
  title: '',
  description: '',
  detailedInfo: '',
  iconName: '',
  accentColor: '',
  pastelBg: ''
};

export const SkillShape = {
  name: '',
  category: '', // 'Frontend' | 'Design' | 'Software'
  percentage: 0,
  iconName: '',
  accent: ''
};

export const TimelineItemShape = {
  id: '',
  year: '',
  period: '',
  title: '',
  organization: '',
  location: '',
  description: '',
  tags: [],
  type: '' // 'experience' | 'education'
};

export const TestimonialShape = {
  id: '',
  name: '',
  role: '',
  company: '',
  text: '',
  avatarUrl: '',
  rating: 0
};
