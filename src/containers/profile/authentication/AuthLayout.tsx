import { Spin } from "antd";
import { PropsWithChildren, Suspense } from "react";

const AuthLayout: React.FC<PropsWithChildren> = (props) => {
  return (
    <Suspense fallback={<Spin />}>
      <div
        style={
          {
            // backgroundImage: `url('../../../assets/admin-bg-light.png')`,
          }
        }
        className="bg-top bg-no-repeat bg-red-600 h-screen"
      >
        <div className="py-[120px] 2xl:py-[80px] px-[15px]">
          <div className="flex justify-center">
            <img
              className="dark:hidden"
              src="../../../assets/img/logo_dark.svg"
              alt=""
            />
            <img
              className="hidden dark:block"
              src="../../../assets/img/logo_white.svg"
              alt=""
            />
          </div>

          {props.children}
        </div>
      </div>
    </Suspense>
  );
};

export default AuthLayout;
