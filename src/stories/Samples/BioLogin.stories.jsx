import SampleBioLogin from 'pages/SampleBioLogin';

export default {
  title: 'Page/SamplePagesCheck',
  component: SampleBioLogin,
  parameters: {
    viewport: {
      //👇 Your own default viewport
      defaultViewport: 'iphone12',
    },
  },
};

const Template = (args) => {
  return <SampleBioLogin {...args} />;
};

export const SampleBioLoginPage = Template.bind({});
