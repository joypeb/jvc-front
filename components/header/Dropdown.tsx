import React from 'react';
import * as DropdownMenu from '@radix-ui/react-dropdown-menu';
import { styled, keyframes } from '@stitches/react';
import {violet, mauve, blackA, gray} from '@radix-ui/colors';
import {
    HamburgerMenuIcon,
    DotFilledIcon,
    CheckIcon,
    ChevronRightIcon,
} from '@radix-ui/react-icons';
import {FaUser} from "react-icons/fa";


const DropdownMenuDemo = () => {
    const [bookmarksChecked, setBookmarksChecked] = React.useState(true);
    const [urlsChecked, setUrlsChecked] = React.useState(false);
    const [person, setPerson] = React.useState('pedro');

    return (
        <DropdownMenu.Root>
            <DropdownMenu.Trigger asChild>
                <IconButton aria-label="Customise options">
                    <FaUser size={24}/>
                </IconButton>
            </DropdownMenu.Trigger>

            <DropdownMenu.Portal>
                <DropdownMenuContent sideOffset={5}>
                    <DropdownMenuItem>
                        로그인
                    </DropdownMenuItem>
                    <DropdownMenuItem>
                        내 정보
                    </DropdownMenuItem>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem>
                        관리자 페이지
                    </DropdownMenuItem>
                    <DropdownMenuArrow />
                </DropdownMenuContent>
            </DropdownMenu.Portal>
        </DropdownMenu.Root>
    );
};

const slideUpAndFade = keyframes({
    '0%': { opacity: 0, transform: 'translateY(2px)' },
    '100%': { opacity: 1, transform: 'translateY(0)' },
});

const slideRightAndFade = keyframes({
    '0%': { opacity: 0, transform: 'translateX(-2px)' },
    '100%': { opacity: 1, transform: 'translateX(0)' },
});

const slideDownAndFade = keyframes({
    '0%': { opacity: 0, transform: 'translateY(-2px)' },
    '100%': { opacity: 1, transform: 'translateY(0)' },
});

const slideLeftAndFade = keyframes({
    '0%': { opacity: 0, transform: 'translateX(2px)' },
    '100%': { opacity: 1, transform: 'translateX(0)' },
});

const contentStyles = {
    minWidth: 220,
    backgroundColor: 'white',
    borderRadius: 6,
    padding: 5,
    boxShadow:
        '0px 10px 38px -10px rgba(22, 23, 24, 0.35), 0px 10px 20px -15px rgba(22, 23, 24, 0.2)',
    animationDuration: '400ms',
    animationTimingFunction: 'cubic-bezier(0.16, 1, 0.3, 1)',
    willChange: 'transform, opacity',
    '&[data-state="open"]': {
        '&[data-side="top"]': { animationName: slideDownAndFade },
        '&[data-side="right"]': { animationName: slideLeftAndFade },
        '&[data-side="bottom"]': { animationName: slideUpAndFade },
        '&[data-side="left"]': { animationName: slideRightAndFade },
    },
};

const DropdownMenuContent = styled(DropdownMenu.Content, contentStyles);

const DropdownMenuArrow = styled(DropdownMenu.Arrow, { fill: 'white' });

const itemStyles = {
    all: 'unset',
    fontSize: 13,
    lineHeight: 1,
    color: gray.gray12,
    borderRadius: 3,
    display: 'flex',
    alignItems: 'center',
    height: 25,
    padding: '0 5px',
    position: 'relative',
    paddingLeft: 25,
    userSelect: 'none',
    cursor:'pointer',

    '&[data-disabled]': {
        color: mauve.mauve8,
        pointerEvents: 'none',
    },

    '&[data-highlighted]': {
        backgroundColor: gray.gray3,
        color: gray.gray12,
    },
};

const DropdownMenuItem = styled(DropdownMenu.Item, itemStyles);

const DropdownMenuSeparator = styled(DropdownMenu.Separator, {
    height: 1,
    backgroundColor: gray.gray6,
    margin: 5,
});

const IconButton = styled('button', {
    all: 'unset',
    fontFamily: 'inherit',
    height: 35,
    width: 35,
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: gray.gray12,
    cursor:'pointer'
});

export default DropdownMenuDemo;