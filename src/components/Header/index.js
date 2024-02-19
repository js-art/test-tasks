import styled from '@emotion/styled';
import { Box, Button, Container, Card } from '@mui/material';
import Logo from '../LogoSign';
import Link from 'src/components/Link';

const HeaderWrapper = styled(Card)(
  ({ theme }) => `
  width: 100%;
  display: flex;
  align-items: center;
  height: ${theme.spacing(10)};
  margin-bottom: ${theme.spacing(10)};
`
);

function Header() {
  const navItems = ['Home', 'About us', 'Contact us'];

  return (
    <HeaderWrapper>
      <Container maxWidth="lg">
        <Box display="flex" alignItems="center">
          <Logo />
          <Box
            display="flex"
            alignItems="center"
            justifyContent="space-between"
            flex={1}
          >
            <Box ml={7} mr={1} sx={{ display: { xs: 'none', sm: 'block' } }}>
              {navItems.map((item) => (
                <Button key={item} sx={{ color: '#fff' }}>
                  {item}
                </Button>
              ))}
            </Box>
            <Box />

            <Box>
              <Button
                component={Link}
                href="/dashboards/tasks"
                variant="contained"
                sx={{ ml: 2 }}
              >
                Live Preview
              </Button>
            </Box>
          </Box>
        </Box>
      </Container>
    </HeaderWrapper>
  );
}

export default Header;
