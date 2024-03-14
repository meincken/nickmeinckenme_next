import { tv, type VariantProps } from 'tailwind-variants';
import Link from 'next/link'

export const button = tv({
  base: 'flex items-center justify-center rounded-lg py-2 px-4 bg-[#a9cc17] text-white block text-2xl text-center mb-4',
  variants: {
    color: {
      secondary: 'bg-transparent text-black border-black border-2',
      icon: 'border-[#9FA0A0] border-[1px] rounded-full bg-[#F6F6F6]'
    }
  }
});

type ButtonVariants = VariantProps<typeof button>;

interface ButtonProps extends ButtonVariants {
  children: React.ReactNode;
  href?: string;
}

export const Button = (props: ButtonProps, href: ButtonProps) => {
  return <Link href={href} className={button(props)}>{props.children}</Link>;
};
