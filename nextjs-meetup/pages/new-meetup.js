import Head from "next/head";
import { useRouter } from "next/router";
import { Fragment } from "react";
import NewMeetUPForm from "../components/meetups/NewMeetupForm";
function NewMeetUpPage() {
  const router = useRouter();
  async function addMeetupHandler(enteredData) {
    const response = await fetch("/api/new-meetup", {
      method: "POST",
      body: JSON.stringify(enteredData),
      headers: {
        "Content-Type": "application/json",
      },
    });
    const data = await response.json();
    console.log(data);
    router.push("/");
  }
  return (
    <Fragment>
      <Head>
        <title>Add a New Meetup</title>
        <meta name="description" content="Add your own Meetups" />
      </Head>
      <NewMeetUPForm onAddMeetup={addMeetupHandler} />
    </Fragment>
  );
}
export default NewMeetUpPage;
