import MyParagraph from './MyParagraph';

const DemoOutput = (props) => {
  console.log('Demo is running!');
  return <MyParagraph>{props.show ? 'This is new' : ''}</MyParagraph>;
};

export default DemoOutput;
