import React from "react";
import Link, { LinkProps } from "next/link";
import { useRouter } from "next/router";

type Props = {
  children: React.ReactNode;
} & LinkProps;

const NavLink = ({ children, ...rest }: Props) => {
  const router = useRouter();

  const classNmae = router.pathname === rest.href ? "active" : "";

  return (
    <>
      <Link {...rest}>
        <a className={classNmae}>{children}</a>
      </Link>

      <style jsx>{`
        a {
          margin-right: 16px;
          text-decoration: none;
        }

        .active {
          border-bottom: solid 1px #fff;
        }
      `}</style>
    </>
  );
};

export default NavLink;
