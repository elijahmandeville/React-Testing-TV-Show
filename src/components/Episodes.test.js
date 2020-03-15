import React from "react";
import Episodes from "../components/Episodes";
import { render } from "@testing-library/react";

const episodes = [
  {
    id: 553946,
    url:
      "http://www.tvmaze.com/episodes/553946/stranger-things-1x01-chapter-one-the-vanishing-of-will-byers",
    name: "Chapter One: The Vanishing of Will Byers",
    season: 1,
    number: 1,
    airdate: "2016-07-15",
    airtime: "",
    airstamp: "2016-07-15T12:00:00+00:00",
    runtime: 60
  },

  {
    id: 578663,
    url:
      "http://www.tvmaze.com/episodes/578663/stranger-things-1x02-chapter-two-the-weirdo-on-maple-street",
    name: "Chapter Two: The Weirdo on Maple Street",
    season: 1,
    number: 2,
    airdate: "2016-07-15",
    airtime: "",
    airstamp: "2016-07-15T12:00:00+00:00",
    runtime: 60
  }
];

test("episodes shows data when rendered  with new episodes", () => {
  const { queryAllByTestId, rerender } = render(<Episodes episodes={[]} />);

  expect(queryAllByTestId("episode")).toStrictEqual([]);
  expect(queryAllByTestId("episode")).toHaveLength(0);

  rerender(<Episodes episodes={episodes} />);

  expect(queryAllByTestId("episode")).toHaveLength(2);
});
