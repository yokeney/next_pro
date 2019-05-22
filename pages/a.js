import { Button } from "antd";
import { withRouter } from "next/router";
import Link from "next/link";
const color='#DDe23f';
   {/* 默認的css js集成 */}
const A = ({ router, name }) => (
    <>
    <Link href="#aaa">
        <a className="link">
        {router.query.id}
        {name}
        </a>
    </Link>
    <style jsx>
        {
            `
            a{
                    color:purple
            }
            `
        }
    </style>
    <style jsx global>
        {
            `
            a{
                    color:${color}
            }
            `
        }
    </style>
    </>
);
A.getInitialProps = async () => {
  console.log("----------------------------");
  const promise = new Promise(resolve => {
    setTimeout(() => {
      resolve({
        name: "jock"
      });
    }, 1000);
  });
  return await promise;
};
export default withRouter(A);
