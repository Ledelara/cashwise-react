import { SvgIconProps } from "@mui/material";
import { 
    Settings, 
    Logout, 
    AccountBalanceWallet, 
    Payments, 
    AttachMoney 
} from "@mui/icons-material";

type IconName = 
| 'Settings' 
| 'Logout'
| 'Deposit' 
| 'Transfer'
| 'Withdrawal'

interface AppIconProps extends SvgIconProps {
    name: IconName;
};

const icons = {
    Settings: Settings,
    Logout: Logout,
    Deposit: AccountBalanceWallet,
    Transfer: Payments,
    Withdrawal: AttachMoney,
};

const AppIcon: React.FC<AppIconProps> = ({ name, ...props }) => {
    const IconComponent = icons[name];
  
    return IconComponent ? <IconComponent {...props} /> : null;
  };

export default AppIcon;