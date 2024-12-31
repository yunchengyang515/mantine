import { Button } from '@mantine/core';
import { MantineDemo } from '@mantinex/demo';

const code = `
import { Button } from '@mantine/core';

function Demo() {
  return (
    <Button disableHover>
      Disabled hover background colour change
    </Button>
  );
}
}
`;

function Demo() {
  return <Button disableHover>Disabled hover background colour change</Button>;
}

export const disableHover: MantineDemo = {
  type: 'code',
  component: Demo,
  centered: true,
  code,
};
