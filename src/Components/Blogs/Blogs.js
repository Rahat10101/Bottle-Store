import React from 'react';
import './Blogs.css';

const Blogs = () => {
    return (
        <div className='ques-ans'>
            <div className='first-ques-ans'>
                <article>
                    <span className='ques'>প্রশ্নঃ Context API কি বা কি কাজে লাগে ? </span><br /> <br />
                    কনটেক্সট এপিআই হল রিঅ্যাক্ট অ্যাপের জন্য কার্যকরভাবে গ্লোবাল ভেরিয়েবল তৈরি করার একটি উপায়। এটি "প্রপ ড্রিলিং" বা parent থেকে children এর কাছে props pass করার alternate system। এটি একটি consumer এবং একটি provider প্রদান করে। provider এমন একটি উপাদান যা এটির নাম অনুসারে তার children কে state প্রদান করে। একটি সাধারণ রিঅ্যাক্ট অ্যাপ্লিকেশনে, props মাধ্যমে ডাটা টপ-ডাউন (parent এর কাছ থেকে children এর কাছে) পাস করা হয়,কিন্তু এই ধরনের ব্যবহার নির্দিষ্ট ধরণের প্রপসের জন্য কষ্টকর হতে পারে যা একটি অ্যাপ্লিকেশনের মধ্যে অনেক উপাদানের জন্য প্রয়োজন।

                </article>
            </div>

            <div className='second-ques-ans'>

                <article>
                    <span className='ques'>প্রশ্নঃ Simantic tag কি ?</span><br /> <br />
                    Semantic HTML উপাদানগুলি হল যেগুলি মানুষের এবং মেশিন-পাঠযোগ্য উপায়ে তাদের অর্থ স্পষ্টভাবে বর্ণনা করে। Semantic এইচটিএমএল ট্যাগগুলি মার্কআপে অর্থ যোগ করার অনুমতি দেয় যাতে সার্চ ইঞ্জিন, স্ক্রিন রিডার এবং ওয়েব ব্রাউজারগুলি এটিকে বোঝাতে পারে। ডিফল্টরূপে, যখন একজন ব্যবহারকারী এজেন্ট বিষয়বস্তু পড়ে  এটি প্রসঙ্গ এবং অর্থ বুঝতে পারে না। Semantic HTML ট্যাগগুলি  ব্যবহারকারীদের কাছে কাঠামোগত সামগ্রী পরিবেশন করতে দেয়, যা অন-পৃষ্ঠা এসইও এবং অ্যাক্সেসযোগ্যতার জন্য বিশেষভাবে গুরুত্বপূর্ণ।
                    এলিমেন্ট যেমন header, footer এবং article সবকটি  semantic বলে বিবেচিত হয় কারণ তারা উপাদানটির উদ্দেশ্য এবং তাদের ভিতরে থাকা বিষয়বস্তুর ধরন সঠিকভাবে বর্ণনা করে।

                </article>
            </div>
        </div>
    );
};

export default Blogs;