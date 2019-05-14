import React, { Component } from 'react';

const Reply = ({ comment, reply }) => (
  <div>
    <p>{comment}</p>

    {!reply && <p style={{ color: 'red' }}>답글</p>}

    <hr />

    {!reply
      && [1, 2, 3, 4, 5, 6, 7, 8, 9].map(t => <Reply key={t} reply comment={t} />)}
  </div>
);

// class Reply extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       comment: props.comment,
//       reply: !props.reply,
//       test: [1, 2, 3, 4, 5, 6, 7, 8, 9],
//     };
//   }

//   render() {
//     const { comment, reply, test } = this.state;
//     return (
//       <div>
//         <p>{comment}</p>

//         {reply && <p style={{ color: 'red' }}>답글</p>}

//         <hr />

//         {reply && test.map(t => <Reply reply comment={t} />)}
//       </div>
//     );
//   }
// }

export default Reply;
