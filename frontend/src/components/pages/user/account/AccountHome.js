/* When user is logged in, they can view account homepage */

import {React, View} from 'react';
import { Button } from '../../../website/Button';
import SideNav, { Toggle, Nav, NavItem, NavIcon, NavText } from '@trendmicro/react-sidenav';
import '@trendmicro/react-sidenav/dist/react-sidenav.css';

import '../../../../App.css';
import Footer from '../../../website/Footer';
import Navbar from '../../../website/Navbar';
import './AccountHome.css';
import Subscriptions from './Subscriptions';

export default function AccountHome() {
    const Subs = () => {
        return (<Subscriptions />);
    }

  return (
    <>
        <body classname="bod">
            <div className="sidebar">
                <Button onClick={Subs}> Subscriptions </Button>
                <Button> Saved Papers </Button>
                <Button> Account Info </Button>
            </div>
        </body>
    </>
  );
}