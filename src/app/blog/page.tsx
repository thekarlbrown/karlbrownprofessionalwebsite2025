import React from 'react';
import styles from './page.module.scss';

interface BlogPost {
  title: string;
  date: string;
  content: React.ReactNode;
}

const blogPosts: BlogPost[] = [
  {
    title: "The Sponge, The Tool, and The Oracle: The Nature of Junior, Mid-Level, and Senior Roles",
    date: "February 2020",
    content: <>
      <p>
        <a href="https://www.linkedin.com/pulse/sponge-tool-oracle-nature-junior-mid-level-senior-roles-karl-brown/" style={{ textDecoration: 'underline' }}>
          LinkedIn Pulse article discussing the natural progression of engineers within a company.
        </a>
      </p>
    </>,
  },
  {
    title: "Greed Algorithm Writeup",
    date: "August 2017",
    content: <>
      <p>
        For quite some time, I was been looking for a way to showcase my Object-Oriented programming skills using Java, but had not yet found a project that would suit this purpose. However, one Friday night after a casual Poker game with my friends, someone introduced me to the dice game Greed. When I learned the rules of Greed, I realized that much of this game could be determined by applying my Software Engineering knowledge to create an Algorithm that would calculate the average points scored per round depending on the various decisions you could make in the game, and use this knowledge to make better choices while playing in real life.
      </p>
      <h3>The Rules of Greed</h3>
      <ul>
        <li>Each round, each player takes turns rolling five dice.</li>
        <li>You receive one point for rolling a 1 and .5 points for rolling a 5.</li>
        <li>If you roll 3 of a kind, you receive the number rolled in points (Three 3&apos;s are worth three points) unless you roll three 1&apos;s, which gives you 10 points.</li>
        <li>4 of a kind count for double those values, 5 of a kind count for quadruple those values.</li>
        <li>You can reroll any non-scoring dice, and any amount of scoring dice as long as at least one scoring die remains from that roll.</li>
        <li>If you ever do not roll any points, you get zero points for the round and it becomes the next player&apos;s turn.</li>
        <li>If you have 5 scoring dice, you can choose to keep those points and re-roll 5 new dice, but if you don&apos;t roll a single scoring die on any subsequent rolls, you still receive zero points for the round.</li>
      </ul>
      <p>
        General tactics for Greed include deciding how riskily to play based on how many points you have compared to your opponent(s) and, in general, deciding when to take risks. With this in mind, I started thinking about how to best write this algorithm and realized that the best approach would be to isolate point values at which a certain decision would switch from being a favorable risk to an unfavorable risk. For example, how many points do you have to have before it becomes unwise to re-roll 4 available non-scoring dice?
      </p>
      <p>
        Using this approach, I decided to write code that would create a configuration file that included values for each of these decision points. Then, using the configuration file, the algorithm knows how to make each of the Greed decisions and determine the resulting average points per round. Using this, you can determine whether the way you are making the decision positively or negatively affects the average points scored per round by comparing it to a simulation that uses different point values for those key decision points. To create my algorithm, I started by making a list of every decision I would take into consideration.
      </p>
      <p>
        The Github code is available <a href="https://github.com/thekarlbrown/GreedAlgorithm/tree/master/src/com/company">here</a>. One of my biggest blockers occurred while I was trying to figure out how to order all of the different decisions and organize the flow in a way which would lead to a logical decision making process. After some thought, I realized that I should first segregate the decision making processes based on the number of non-scoring re-rollable dice. In terms of coding best practices, I did some refactoring early on when I realized the most optimal and cleanest way of handling all of the configuration creation was to create a standalone configuration class and place all the accompanying logic inside it.
      </p>
      <p>
        Although I have yet to delve very deep into figuring out what is optimal, I have come to some interesting conclusions thus far. For example, I know that, when simulating 100,000,000 rounds of the game Greed, I saw that if the computer chooses never to re-roll dice and always keeps the points scored on its initial roll, its average number of points per round will be 2.26. I intend to figure out what decisions are almost always very bad and what decisions are key to maximizing your score. Then I will hone in on every possible configuration surrounding the decisions that matter, in ranges of point values. I will subsequently do a massive simulation to try to get graph-friendly comparable data in order to find out the PERFECT way to play a game of Greed. However, it is important to note that these conclusions will only apply to the first few rounds of a game of Greed, as my Algorithm does not take into consideration how a player&apos;s score compares to other players&apos; and the potential motivation to make riskier decisions when one has started losing.
      </p>
    </>,
  }
];

export default function BlogPage() {
  return (
    <div className={styles['blog-container']}>
      <h1>Blog</h1>
      <div className={styles['posts-grid']}>
        {blogPosts.map((post, index) => {
          const content = typeof post.content === 'string' ? (
            <p className={styles['post-content']}>{post.content}</p>
          ) : (
            <div className={styles['post-content']}>{post.content}</div>
          );
          return (
            <article key={index} className={styles['post-card']}>
              <h2>{post.title}</h2>
              <div className={styles['post-meta']}>
                <span className={styles['post-date']}>{post.date}</span>
              </div>
              {content}
            </article>
          );
        })}
      </div>
    </div>
  );
}
