import { SvgIconProps } from "@mui/material";
import { 
    Settings, 
    Logout, 
    AccountBalanceWallet, 
    Payments, 
    AttachMoney, 
    CreditCard,
    ReceiptLong,
} from "@mui/icons-material";

const ICONS = [
    {
        title: "Settings",
        icon: <Settings />,
    },
    {
        title: "Logout",
        icon: <Logout />,
    },
    {
        title: "Deposit",
        icon: <AccountBalanceWallet />,
    },
    {
        title: "Transfer",
        icon: <Payments />,
    },
    {
        title: "Withdrawal",
        icon: <AttachMoney />,
    },
    {
        title: "CreditCard",
        icon: <CreditCard />,
    },
    {
        title: "Transactions",
        icon: <ReceiptLong />,
    },
]

const AppIcon = ({ iconTitle }: { iconTitle: string } & SvgIconProps) => {
    const icon = ICONS.find((icon) => icon.title === iconTitle);

    if (!icon) return null;

    return icon.icon;
};

export default AppIcon;