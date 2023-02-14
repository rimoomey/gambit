import { useEffect } from "react";
import { useOutletContext } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import SignInModal from "./SignInModal";
import styled from "styled-components";

const PageContent = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  flex: 1;
`;

export default function AccountInformationPage() {
  const { user } = useOutletContext();

  console.log(user)

  useEffect(() => {
    const displayModal = (modal, id) => {
      toast(modal, {
        toastId: id,
        position: "top-center",
        closeOnClick: false,
        theme: "dark",
        closeButton: false,
      });
    };

    if (!user) {
      displayModal(<SignInModal />, "sign-in-toast");
    } else {
      toast.dismiss("sign-in-toast");
    }
  }, [user]);

  return (
    <PageContent>
      {user ? (
        <>
          <h2
            style={{
              flex: "0",
              backgroundColor: "white",
              color: "black",
              mixBlendMode: "screen",
            }}
          >
            Account Information
          </h2>
          <div
            style={{
              backgroundImage:
                "var(--gradient--vivid-cyan-blue-to-vivid-purple)",
              width: "80%",
              height: "75%",
              padding: "20px",
            }}
          >
            <img src={user.avatar} style={{width: "125px", border: "1px solid white", borderRadius: "50%"}}/>
            <div style={{color: "white"}}>{user.username}</div>
          </div>
        </>
      ) : null}
      <ToastContainer autoClose={false} draggable={false} />
    </PageContent>
  );
}
