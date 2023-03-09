import { Text, Field, withDatasourceCheck, RichText } from '@sitecore-jss/sitecore-jss-nextjs';
import { ComponentProps } from 'lib/component-props';

type HelloWorldProps = ComponentProps & {
  fields: {
    heading: Field<string>;
    body: Field<string>;
  };
};

const HelloWorld = (props: HelloWorldProps): JSX.Element => (
  <div>
    <p>HelloWorld Component</p>
    <Text field={props.fields.heading} />
    <RichText field={props.fields.body} />
  </div>
);

export default withDatasourceCheck()<HelloWorldProps>(HelloWorld);
