import * as React from 'react';
import { Result } from 'antd';

const ThanksPage = () => {
  const subTitle = (
    <>
      A representative from eMushrif will contact you on the status of your
      application soon. For any additional inquiries, please email us at <a
      href="mailto:sahala-support@emushrif.om">sahala-support@emushrif.om</a>
    </>
  );
  return (
    <Result
      icon={null}
      title="Thanks for registration"
      subTitle={subTitle}
    />
  );
};

export default ThanksPage;
