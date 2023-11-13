import { useRef, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { styled } from 'styled-components';
import { useClickOutside, useSelector } from 'utils/hooks';

const Navigation = () => {
  const navigation_ref = useRef(null);
  const location = useLocation();
  const [open, setOpen] = useState(false);
  const { menu } = useSelector(({ navigation }) => navigation);
  const { data } = useSelector(({ user }) => user);
  const navigate = useNavigate();
  useClickOutside(navigation_ref, setOpen);
  return (
    <Nav ref={navigation_ref} onClick={() => setOpen(true)}>
      <Profile $open={open}>
        <img src={data.img} alt="" />
        <p>{data.name}</p>
      </Profile>
      {menu.map((navigation) => (
        <NavigationItem
          $open={open}
          key={navigation.name}
          $active={location.pathname === navigation.path}
          onClick={() => navigate(navigation.path)}
        >
          <img
            src={navigation.icon}
            alt={navigation.name}
            width="25px"
            height="25px"
          />
          <p>{navigation.name}</p>
        </NavigationItem>
      ))}
      <Set $open={open}>
        <p>Language</p>
        <p>get help</p>
        <p>exit</p>
      </Set>
    </Nav>
  );
};
const Profile = styled.div<{ $open: boolean }>`
  display: flex;
  align-items: center;
  margin: 20px 0;
  > img {
    width: ${({ $open }) => ($open ? '40px' : 0)};
    height: 40px;
    object-fit: cover;
    border-radius: 1500px;
    transition: width 0.3s;
  }
  p {
    font-size: ${({ $open }) => ($open ? '1.8rem' : 0)};
    color: #fff;
    margin: 0 0 0 16px;
    transition: font-size 0.3s;
  }
`;
const Nav = styled.nav`
  background-color: black;
  width: fit-content;
  height: 100vh;
  padding: 16px;
`;
const NavigationItem = styled.div<{ $open: boolean; $active?: boolean }>`
  display: grid;
  grid-template-columns: 25px auto;
  grid-column-gap: ${({ $open }) => ($open ? '16px' : 0)};
  align-items: center;
  padding: 3px 16px;
  min-height: 50px;
  background-color: ${({ $active }) => ($active ? '#1b6565' : 'transparent')};
  border-radius: ${({ $open }) => ($open ? '16px' : '1500px')};
  cursor: pointer;
  l &:not(:last-child) {
    margin-bottom: 5px;
  }
  > img {
    object-fit: contain;
  }
  > p {
    color: #fff;
    font-size: ${({ $open }) => ($open ? '1.6rem' : 0)};
    transition: font-size 0.3s;
    margin: 0;
    white-space: nowrap;
    text-transform: capitalize;
  }
`;

const Set = styled.div<{ $open: boolean }>`
  padding-left: 16px;
  flex: 1;
  margin-top: 60px;
  > p {
    color: #fff;
    font-size: ${({ $open }) => ($open ? '2rem' : 0)};
    text-transform: uppercase;
    transition: font-size 0.3s;
  }
`;
export default Navigation;
