(function() {var implementors = {};
implementors["futures_util"] = [{"text":"impl&lt;Fut&gt; <a class=\"trait\" href=\"futures_util/stream/trait.FusedStream.html\" title=\"trait futures_util::stream::FusedStream\">FusedStream</a> for <a class=\"struct\" href=\"futures_util/future/struct.FlattenStream.html\" title=\"struct futures_util::future::FlattenStream\">FlattenStream</a>&lt;Fut&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;Fut: <a class=\"trait\" href=\"futures_util/future/trait.Future.html\" title=\"trait futures_util::future::Future\">Future</a>,<br>&nbsp;&nbsp;&nbsp;&nbsp;Fut::<a class=\"type\" href=\"futures_util/future/trait.Future.html#associatedtype.Output\" title=\"type futures_util::future::Future::Output\">Output</a>: <a class=\"trait\" href=\"futures_util/stream/trait.Stream.html\" title=\"trait futures_util::stream::Stream\">Stream</a> + <a class=\"trait\" href=\"futures_util/stream/trait.FusedStream.html\" title=\"trait futures_util::stream::FusedStream\">FusedStream</a>,&nbsp;</span>","synthetic":false,"types":["futures_util::future::future::flatten_stream::FlattenStream"]},{"text":"impl&lt;Fut:&nbsp;<a class=\"trait\" href=\"futures_util/future/trait.Future.html\" title=\"trait futures_util::future::Future\">Future</a>&gt; <a class=\"trait\" href=\"futures_util/stream/trait.FusedStream.html\" title=\"trait futures_util::stream::FusedStream\">FusedStream</a> for <a class=\"struct\" href=\"futures_util/future/struct.IntoStream.html\" title=\"struct futures_util::future::IntoStream\">IntoStream</a>&lt;Fut&gt;","synthetic":false,"types":["futures_util::future::future::into_stream::IntoStream"]},{"text":"impl&lt;Fut&gt; <a class=\"trait\" href=\"futures_util/stream/trait.FusedStream.html\" title=\"trait futures_util::stream::FusedStream\">FusedStream</a> for <a class=\"struct\" href=\"futures_util/future/struct.TryFlattenStream.html\" title=\"struct futures_util::future::TryFlattenStream\">TryFlattenStream</a>&lt;Fut&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;Fut: <a class=\"trait\" href=\"futures_util/future/trait.TryFuture.html\" title=\"trait futures_util::future::TryFuture\">TryFuture</a>,<br>&nbsp;&nbsp;&nbsp;&nbsp;Fut::<a class=\"type\" href=\"futures_util/future/trait.TryFuture.html#associatedtype.Ok\" title=\"type futures_util::future::TryFuture::Ok\">Ok</a>: <a class=\"trait\" href=\"futures_util/stream/trait.TryStream.html\" title=\"trait futures_util::stream::TryStream\">TryStream</a>&lt;Error = Fut::<a class=\"type\" href=\"futures_util/future/trait.TryFuture.html#associatedtype.Error\" title=\"type futures_util::future::TryFuture::Error\">Error</a>&gt; + <a class=\"trait\" href=\"futures_util/stream/trait.FusedStream.html\" title=\"trait futures_util::stream::FusedStream\">FusedStream</a>,&nbsp;</span>","synthetic":false,"types":["futures_util::future::try_future::try_flatten_stream::TryFlattenStream"]},{"text":"impl&lt;A, B&gt; <a class=\"trait\" href=\"futures_util/stream/trait.FusedStream.html\" title=\"trait futures_util::stream::FusedStream\">FusedStream</a> for <a class=\"enum\" href=\"futures_util/future/enum.Either.html\" title=\"enum futures_util::future::Either\">Either</a>&lt;A, B&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;A: <a class=\"trait\" href=\"futures_util/stream/trait.FusedStream.html\" title=\"trait futures_util::stream::FusedStream\">FusedStream</a>,<br>&nbsp;&nbsp;&nbsp;&nbsp;B: <a class=\"trait\" href=\"futures_util/stream/trait.FusedStream.html\" title=\"trait futures_util::stream::FusedStream\">FusedStream</a>&lt;Item = A::<a class=\"type\" href=\"futures_util/stream/trait.Stream.html#associatedtype.Item\" title=\"type futures_util::stream::Stream::Item\">Item</a>&gt;,&nbsp;</span>","synthetic":false,"types":["futures_util::future::either::Either"]},{"text":"impl&lt;St1, St2&gt; <a class=\"trait\" href=\"futures_util/stream/trait.FusedStream.html\" title=\"trait futures_util::stream::FusedStream\">FusedStream</a> for <a class=\"struct\" href=\"futures_util/stream/struct.Chain.html\" title=\"struct futures_util::stream::Chain\">Chain</a>&lt;St1, St2&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;St1: <a class=\"trait\" href=\"futures_util/stream/trait.Stream.html\" title=\"trait futures_util::stream::Stream\">Stream</a>,<br>&nbsp;&nbsp;&nbsp;&nbsp;St2: <a class=\"trait\" href=\"futures_util/stream/trait.FusedStream.html\" title=\"trait futures_util::stream::FusedStream\">FusedStream</a>&lt;Item = St1::<a class=\"type\" href=\"futures_util/stream/trait.Stream.html#associatedtype.Item\" title=\"type futures_util::stream::Stream::Item\">Item</a>&gt;,&nbsp;</span>","synthetic":false,"types":["futures_util::stream::stream::chain::Chain"]},{"text":"impl&lt;St:&nbsp;<a class=\"trait\" href=\"futures_util/stream/trait.Stream.html\" title=\"trait futures_util::stream::Stream\">Stream</a> + <a class=\"trait\" href=\"futures_util/stream/trait.FusedStream.html\" title=\"trait futures_util::stream::FusedStream\">FusedStream</a>&gt; <a class=\"trait\" href=\"futures_util/stream/trait.FusedStream.html\" title=\"trait futures_util::stream::FusedStream\">FusedStream</a> for <a class=\"struct\" href=\"futures_util/stream/struct.Enumerate.html\" title=\"struct futures_util::stream::Enumerate\">Enumerate</a>&lt;St&gt;","synthetic":false,"types":["futures_util::stream::stream::enumerate::Enumerate"]},{"text":"impl&lt;St, Fut, F&gt; <a class=\"trait\" href=\"futures_util/stream/trait.FusedStream.html\" title=\"trait futures_util::stream::FusedStream\">FusedStream</a> for <a class=\"struct\" href=\"futures_util/stream/struct.Filter.html\" title=\"struct futures_util::stream::Filter\">Filter</a>&lt;St, Fut, F&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;St: <a class=\"trait\" href=\"futures_util/stream/trait.Stream.html\" title=\"trait futures_util::stream::Stream\">Stream</a> + <a class=\"trait\" href=\"futures_util/stream/trait.FusedStream.html\" title=\"trait futures_util::stream::FusedStream\">FusedStream</a>,<br>&nbsp;&nbsp;&nbsp;&nbsp;F: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/ops/function/trait.FnMut.html\" title=\"trait core::ops::function::FnMut\">FnMut</a>(&amp;St::<a class=\"type\" href=\"futures_util/stream/trait.Stream.html#associatedtype.Item\" title=\"type futures_util::stream::Stream::Item\">Item</a>) -&gt; Fut,<br>&nbsp;&nbsp;&nbsp;&nbsp;Fut: <a class=\"trait\" href=\"futures_util/future/trait.Future.html\" title=\"trait futures_util::future::Future\">Future</a>&lt;Output = <a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.bool.html\">bool</a>&gt;,&nbsp;</span>","synthetic":false,"types":["futures_util::stream::stream::filter::Filter"]},{"text":"impl&lt;St, Fut, F, T&gt; <a class=\"trait\" href=\"futures_util/stream/trait.FusedStream.html\" title=\"trait futures_util::stream::FusedStream\">FusedStream</a> for <a class=\"struct\" href=\"futures_util/stream/struct.FilterMap.html\" title=\"struct futures_util::stream::FilterMap\">FilterMap</a>&lt;St, Fut, F&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;St: <a class=\"trait\" href=\"futures_util/stream/trait.Stream.html\" title=\"trait futures_util::stream::Stream\">Stream</a> + <a class=\"trait\" href=\"futures_util/stream/trait.FusedStream.html\" title=\"trait futures_util::stream::FusedStream\">FusedStream</a>,<br>&nbsp;&nbsp;&nbsp;&nbsp;F: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/ops/function/trait.FnMut.html\" title=\"trait core::ops::function::FnMut\">FnMut</a>(St::<a class=\"type\" href=\"futures_util/stream/trait.Stream.html#associatedtype.Item\" title=\"type futures_util::stream::Stream::Item\">Item</a>) -&gt; Fut,<br>&nbsp;&nbsp;&nbsp;&nbsp;Fut: <a class=\"trait\" href=\"futures_util/future/trait.Future.html\" title=\"trait futures_util::future::Future\">Future</a>&lt;Output = <a class=\"enum\" href=\"https://doc.rust-lang.org/nightly/core/option/enum.Option.html\" title=\"enum core::option::Option\">Option</a>&lt;T&gt;&gt;,&nbsp;</span>","synthetic":false,"types":["futures_util::stream::stream::filter_map::FilterMap"]},{"text":"impl&lt;St&gt; <a class=\"trait\" href=\"futures_util/stream/trait.FusedStream.html\" title=\"trait futures_util::stream::FusedStream\">FusedStream</a> for <a class=\"struct\" href=\"futures_util/stream/struct.Flatten.html\" title=\"struct futures_util::stream::Flatten\">Flatten</a>&lt;St&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;St: <a class=\"trait\" href=\"futures_util/stream/trait.FusedStream.html\" title=\"trait futures_util::stream::FusedStream\">FusedStream</a>,<br>&nbsp;&nbsp;&nbsp;&nbsp;St::<a class=\"type\" href=\"futures_util/stream/trait.Stream.html#associatedtype.Item\" title=\"type futures_util::stream::Stream::Item\">Item</a>: <a class=\"trait\" href=\"futures_util/stream/trait.Stream.html\" title=\"trait futures_util::stream::Stream\">Stream</a>,&nbsp;</span>","synthetic":false,"types":["futures_util::stream::stream::flatten::Flatten"]},{"text":"impl&lt;S:&nbsp;<a class=\"trait\" href=\"futures_util/stream/trait.Stream.html\" title=\"trait futures_util::stream::Stream\">Stream</a>&gt; <a class=\"trait\" href=\"futures_util/stream/trait.FusedStream.html\" title=\"trait futures_util::stream::FusedStream\">FusedStream</a> for <a class=\"struct\" href=\"futures_util/stream/struct.Fuse.html\" title=\"struct futures_util::stream::Fuse\">Fuse</a>&lt;S&gt;","synthetic":false,"types":["futures_util::stream::stream::fuse::Fuse"]},{"text":"impl&lt;St, F&gt; <a class=\"trait\" href=\"futures_util/stream/trait.FusedStream.html\" title=\"trait futures_util::stream::FusedStream\">FusedStream</a> for <a class=\"struct\" href=\"futures_util/stream/struct.Inspect.html\" title=\"struct futures_util::stream::Inspect\">Inspect</a>&lt;St, F&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;St: <a class=\"trait\" href=\"futures_util/stream/trait.FusedStream.html\" title=\"trait futures_util::stream::FusedStream\">FusedStream</a>,<br>&nbsp;&nbsp;&nbsp;&nbsp;F: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/ops/function/trait.FnMut.html\" title=\"trait core::ops::function::FnMut\">FnMut</a>(&amp;St::<a class=\"type\" href=\"futures_util/stream/trait.Stream.html#associatedtype.Item\" title=\"type futures_util::stream::Stream::Item\">Item</a>),&nbsp;</span>","synthetic":false,"types":["futures_util::stream::stream::inspect::Inspect"]},{"text":"impl&lt;St, F, T&gt; <a class=\"trait\" href=\"futures_util/stream/trait.FusedStream.html\" title=\"trait futures_util::stream::FusedStream\">FusedStream</a> for <a class=\"struct\" href=\"futures_util/stream/struct.Map.html\" title=\"struct futures_util::stream::Map\">Map</a>&lt;St, F&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;St: <a class=\"trait\" href=\"futures_util/stream/trait.FusedStream.html\" title=\"trait futures_util::stream::FusedStream\">FusedStream</a>,<br>&nbsp;&nbsp;&nbsp;&nbsp;F: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/ops/function/trait.FnMut.html\" title=\"trait core::ops::function::FnMut\">FnMut</a>(St::<a class=\"type\" href=\"futures_util/stream/trait.Stream.html#associatedtype.Item\" title=\"type futures_util::stream::Stream::Item\">Item</a>) -&gt; T,&nbsp;</span>","synthetic":false,"types":["futures_util::stream::stream::map::Map"]},{"text":"impl&lt;St:&nbsp;<a class=\"trait\" href=\"futures_util/stream/trait.Stream.html\" title=\"trait futures_util::stream::Stream\">Stream</a>&gt; <a class=\"trait\" href=\"futures_util/stream/trait.FusedStream.html\" title=\"trait futures_util::stream::FusedStream\">FusedStream</a> for <a class=\"struct\" href=\"futures_util/stream/struct.Peekable.html\" title=\"struct futures_util::stream::Peekable\">Peekable</a>&lt;St&gt;","synthetic":false,"types":["futures_util::stream::stream::peek::Peekable"]},{"text":"impl&lt;St:&nbsp;<a class=\"trait\" href=\"futures_util/stream/trait.FusedStream.html\" title=\"trait futures_util::stream::FusedStream\">FusedStream</a>&gt; <a class=\"trait\" href=\"futures_util/stream/trait.FusedStream.html\" title=\"trait futures_util::stream::FusedStream\">FusedStream</a> for <a class=\"struct\" href=\"futures_util/stream/struct.Skip.html\" title=\"struct futures_util::stream::Skip\">Skip</a>&lt;St&gt;","synthetic":false,"types":["futures_util::stream::stream::skip::Skip"]},{"text":"impl&lt;St, Fut, F&gt; <a class=\"trait\" href=\"futures_util/stream/trait.FusedStream.html\" title=\"trait futures_util::stream::FusedStream\">FusedStream</a> for <a class=\"struct\" href=\"futures_util/stream/struct.SkipWhile.html\" title=\"struct futures_util::stream::SkipWhile\">SkipWhile</a>&lt;St, Fut, F&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;St: <a class=\"trait\" href=\"futures_util/stream/trait.FusedStream.html\" title=\"trait futures_util::stream::FusedStream\">FusedStream</a>,<br>&nbsp;&nbsp;&nbsp;&nbsp;F: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/ops/function/trait.FnMut.html\" title=\"trait core::ops::function::FnMut\">FnMut</a>(&amp;St::<a class=\"type\" href=\"futures_util/stream/trait.Stream.html#associatedtype.Item\" title=\"type futures_util::stream::Stream::Item\">Item</a>) -&gt; Fut,<br>&nbsp;&nbsp;&nbsp;&nbsp;Fut: <a class=\"trait\" href=\"futures_util/future/trait.Future.html\" title=\"trait futures_util::future::Future\">Future</a>&lt;Output = <a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.bool.html\">bool</a>&gt;,&nbsp;</span>","synthetic":false,"types":["futures_util::stream::stream::skip_while::SkipWhile"]},{"text":"impl&lt;St&gt; <a class=\"trait\" href=\"futures_util/stream/trait.FusedStream.html\" title=\"trait futures_util::stream::FusedStream\">FusedStream</a> for <a class=\"struct\" href=\"futures_util/stream/struct.Take.html\" title=\"struct futures_util::stream::Take\">Take</a>&lt;St&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;St: <a class=\"trait\" href=\"futures_util/stream/trait.FusedStream.html\" title=\"trait futures_util::stream::FusedStream\">FusedStream</a>,&nbsp;</span>","synthetic":false,"types":["futures_util::stream::stream::take::Take"]},{"text":"impl&lt;St, Fut, F&gt; <a class=\"trait\" href=\"futures_util/stream/trait.FusedStream.html\" title=\"trait futures_util::stream::FusedStream\">FusedStream</a> for <a class=\"struct\" href=\"futures_util/stream/struct.TakeWhile.html\" title=\"struct futures_util::stream::TakeWhile\">TakeWhile</a>&lt;St, Fut, F&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;St: <a class=\"trait\" href=\"futures_util/stream/trait.FusedStream.html\" title=\"trait futures_util::stream::FusedStream\">FusedStream</a>,<br>&nbsp;&nbsp;&nbsp;&nbsp;F: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/ops/function/trait.FnMut.html\" title=\"trait core::ops::function::FnMut\">FnMut</a>(&amp;St::<a class=\"type\" href=\"futures_util/stream/trait.Stream.html#associatedtype.Item\" title=\"type futures_util::stream::Stream::Item\">Item</a>) -&gt; Fut,<br>&nbsp;&nbsp;&nbsp;&nbsp;Fut: <a class=\"trait\" href=\"futures_util/future/trait.Future.html\" title=\"trait futures_util::future::Future\">Future</a>&lt;Output = <a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.bool.html\">bool</a>&gt;,&nbsp;</span>","synthetic":false,"types":["futures_util::stream::stream::take_while::TakeWhile"]},{"text":"impl&lt;St, Fut, F&gt; <a class=\"trait\" href=\"futures_util/stream/trait.FusedStream.html\" title=\"trait futures_util::stream::FusedStream\">FusedStream</a> for <a class=\"struct\" href=\"futures_util/stream/struct.Then.html\" title=\"struct futures_util::stream::Then\">Then</a>&lt;St, Fut, F&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;St: <a class=\"trait\" href=\"futures_util/stream/trait.FusedStream.html\" title=\"trait futures_util::stream::FusedStream\">FusedStream</a>,<br>&nbsp;&nbsp;&nbsp;&nbsp;F: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/ops/function/trait.FnMut.html\" title=\"trait core::ops::function::FnMut\">FnMut</a>(St::<a class=\"type\" href=\"futures_util/stream/trait.Stream.html#associatedtype.Item\" title=\"type futures_util::stream::Stream::Item\">Item</a>) -&gt; Fut,<br>&nbsp;&nbsp;&nbsp;&nbsp;Fut: <a class=\"trait\" href=\"futures_util/future/trait.Future.html\" title=\"trait futures_util::future::Future\">Future</a>,&nbsp;</span>","synthetic":false,"types":["futures_util::stream::stream::then::Then"]},{"text":"impl&lt;St1, St2&gt; <a class=\"trait\" href=\"futures_util/stream/trait.FusedStream.html\" title=\"trait futures_util::stream::FusedStream\">FusedStream</a> for <a class=\"struct\" href=\"futures_util/stream/struct.Zip.html\" title=\"struct futures_util::stream::Zip\">Zip</a>&lt;St1, St2&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;St1: <a class=\"trait\" href=\"futures_util/stream/trait.Stream.html\" title=\"trait futures_util::stream::Stream\">Stream</a>,<br>&nbsp;&nbsp;&nbsp;&nbsp;St2: <a class=\"trait\" href=\"futures_util/stream/trait.Stream.html\" title=\"trait futures_util::stream::Stream\">Stream</a>,&nbsp;</span>","synthetic":false,"types":["futures_util::stream::stream::zip::Zip"]},{"text":"impl&lt;B, St, S, Fut, F&gt; <a class=\"trait\" href=\"futures_util/stream/trait.FusedStream.html\" title=\"trait futures_util::stream::FusedStream\">FusedStream</a> for <a class=\"struct\" href=\"futures_util/stream/struct.Scan.html\" title=\"struct futures_util::stream::Scan\">Scan</a>&lt;St, S, Fut, F&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;St: <a class=\"trait\" href=\"futures_util/stream/trait.FusedStream.html\" title=\"trait futures_util::stream::FusedStream\">FusedStream</a>,<br>&nbsp;&nbsp;&nbsp;&nbsp;F: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/ops/function/trait.FnMut.html\" title=\"trait core::ops::function::FnMut\">FnMut</a>(<a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.reference.html\">&amp;mut </a>S, St::<a class=\"type\" href=\"futures_util/stream/trait.Stream.html#associatedtype.Item\" title=\"type futures_util::stream::Stream::Item\">Item</a>) -&gt; Fut,<br>&nbsp;&nbsp;&nbsp;&nbsp;Fut: <a class=\"trait\" href=\"futures_util/future/trait.Future.html\" title=\"trait futures_util::future::Future\">Future</a>&lt;Output = <a class=\"enum\" href=\"https://doc.rust-lang.org/nightly/core/option/enum.Option.html\" title=\"enum core::option::Option\">Option</a>&lt;B&gt;&gt;,&nbsp;</span>","synthetic":false,"types":["futures_util::stream::stream::scan::Scan"]},{"text":"impl&lt;St, Fut, F&gt; <a class=\"trait\" href=\"futures_util/stream/trait.FusedStream.html\" title=\"trait futures_util::stream::FusedStream\">FusedStream</a> for <a class=\"struct\" href=\"futures_util/stream/struct.AndThen.html\" title=\"struct futures_util::stream::AndThen\">AndThen</a>&lt;St, Fut, F&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;St: <a class=\"trait\" href=\"futures_util/stream/trait.TryStream.html\" title=\"trait futures_util::stream::TryStream\">TryStream</a> + <a class=\"trait\" href=\"futures_util/stream/trait.FusedStream.html\" title=\"trait futures_util::stream::FusedStream\">FusedStream</a>,<br>&nbsp;&nbsp;&nbsp;&nbsp;F: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/ops/function/trait.FnMut.html\" title=\"trait core::ops::function::FnMut\">FnMut</a>(St::<a class=\"type\" href=\"futures_util/stream/trait.TryStream.html#associatedtype.Ok\" title=\"type futures_util::stream::TryStream::Ok\">Ok</a>) -&gt; Fut,<br>&nbsp;&nbsp;&nbsp;&nbsp;Fut: <a class=\"trait\" href=\"futures_util/future/trait.TryFuture.html\" title=\"trait futures_util::future::TryFuture\">TryFuture</a>&lt;Error = St::<a class=\"type\" href=\"futures_util/stream/trait.TryStream.html#associatedtype.Error\" title=\"type futures_util::stream::TryStream::Error\">Error</a>&gt;,&nbsp;</span>","synthetic":false,"types":["futures_util::stream::try_stream::and_then::AndThen"]},{"text":"impl&lt;St, E&gt; <a class=\"trait\" href=\"futures_util/stream/trait.FusedStream.html\" title=\"trait futures_util::stream::FusedStream\">FusedStream</a> for <a class=\"struct\" href=\"futures_util/stream/struct.ErrInto.html\" title=\"struct futures_util::stream::ErrInto\">ErrInto</a>&lt;St, E&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;St: <a class=\"trait\" href=\"futures_util/stream/trait.TryStream.html\" title=\"trait futures_util::stream::TryStream\">TryStream</a> + <a class=\"trait\" href=\"futures_util/stream/trait.FusedStream.html\" title=\"trait futures_util::stream::FusedStream\">FusedStream</a>,<br>&nbsp;&nbsp;&nbsp;&nbsp;St::<a class=\"type\" href=\"futures_util/stream/trait.TryStream.html#associatedtype.Error\" title=\"type futures_util::stream::TryStream::Error\">Error</a>: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.Into.html\" title=\"trait core::convert::Into\">Into</a>&lt;E&gt;,&nbsp;</span>","synthetic":false,"types":["futures_util::stream::try_stream::err_into::ErrInto"]},{"text":"impl&lt;St, F&gt; <a class=\"trait\" href=\"futures_util/stream/trait.FusedStream.html\" title=\"trait futures_util::stream::FusedStream\">FusedStream</a> for <a class=\"struct\" href=\"futures_util/stream/struct.InspectOk.html\" title=\"struct futures_util::stream::InspectOk\">InspectOk</a>&lt;St, F&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;St: <a class=\"trait\" href=\"futures_util/stream/trait.TryStream.html\" title=\"trait futures_util::stream::TryStream\">TryStream</a> + <a class=\"trait\" href=\"futures_util/stream/trait.FusedStream.html\" title=\"trait futures_util::stream::FusedStream\">FusedStream</a>,<br>&nbsp;&nbsp;&nbsp;&nbsp;F: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/ops/function/trait.FnMut.html\" title=\"trait core::ops::function::FnMut\">FnMut</a>(&amp;St::<a class=\"type\" href=\"futures_util/stream/trait.TryStream.html#associatedtype.Ok\" title=\"type futures_util::stream::TryStream::Ok\">Ok</a>),&nbsp;</span>","synthetic":false,"types":["futures_util::stream::try_stream::inspect_ok::InspectOk"]},{"text":"impl&lt;St, F&gt; <a class=\"trait\" href=\"futures_util/stream/trait.FusedStream.html\" title=\"trait futures_util::stream::FusedStream\">FusedStream</a> for <a class=\"struct\" href=\"futures_util/stream/struct.InspectErr.html\" title=\"struct futures_util::stream::InspectErr\">InspectErr</a>&lt;St, F&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;St: <a class=\"trait\" href=\"futures_util/stream/trait.TryStream.html\" title=\"trait futures_util::stream::TryStream\">TryStream</a> + <a class=\"trait\" href=\"futures_util/stream/trait.FusedStream.html\" title=\"trait futures_util::stream::FusedStream\">FusedStream</a>,<br>&nbsp;&nbsp;&nbsp;&nbsp;F: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/ops/function/trait.FnMut.html\" title=\"trait core::ops::function::FnMut\">FnMut</a>(&amp;St::<a class=\"type\" href=\"futures_util/stream/trait.TryStream.html#associatedtype.Error\" title=\"type futures_util::stream::TryStream::Error\">Error</a>),&nbsp;</span>","synthetic":false,"types":["futures_util::stream::try_stream::inspect_err::InspectErr"]},{"text":"impl&lt;St:&nbsp;<a class=\"trait\" href=\"futures_util/stream/trait.TryStream.html\" title=\"trait futures_util::stream::TryStream\">TryStream</a> + <a class=\"trait\" href=\"futures_util/stream/trait.FusedStream.html\" title=\"trait futures_util::stream::FusedStream\">FusedStream</a>&gt; <a class=\"trait\" href=\"futures_util/stream/trait.FusedStream.html\" title=\"trait futures_util::stream::FusedStream\">FusedStream</a> for <a class=\"struct\" href=\"futures_util/stream/struct.IntoStream.html\" title=\"struct futures_util::stream::IntoStream\">IntoStream</a>&lt;St&gt;","synthetic":false,"types":["futures_util::stream::try_stream::into_stream::IntoStream"]},{"text":"impl&lt;St, F, T&gt; <a class=\"trait\" href=\"futures_util/stream/trait.FusedStream.html\" title=\"trait futures_util::stream::FusedStream\">FusedStream</a> for <a class=\"struct\" href=\"futures_util/stream/struct.MapOk.html\" title=\"struct futures_util::stream::MapOk\">MapOk</a>&lt;St, F&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;St: <a class=\"trait\" href=\"futures_util/stream/trait.TryStream.html\" title=\"trait futures_util::stream::TryStream\">TryStream</a> + <a class=\"trait\" href=\"futures_util/stream/trait.FusedStream.html\" title=\"trait futures_util::stream::FusedStream\">FusedStream</a>,<br>&nbsp;&nbsp;&nbsp;&nbsp;F: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/ops/function/trait.FnMut.html\" title=\"trait core::ops::function::FnMut\">FnMut</a>(St::<a class=\"type\" href=\"futures_util/stream/trait.TryStream.html#associatedtype.Ok\" title=\"type futures_util::stream::TryStream::Ok\">Ok</a>) -&gt; T,&nbsp;</span>","synthetic":false,"types":["futures_util::stream::try_stream::map_ok::MapOk"]},{"text":"impl&lt;St, F, E&gt; <a class=\"trait\" href=\"futures_util/stream/trait.FusedStream.html\" title=\"trait futures_util::stream::FusedStream\">FusedStream</a> for <a class=\"struct\" href=\"futures_util/stream/struct.MapErr.html\" title=\"struct futures_util::stream::MapErr\">MapErr</a>&lt;St, F&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;St: <a class=\"trait\" href=\"futures_util/stream/trait.TryStream.html\" title=\"trait futures_util::stream::TryStream\">TryStream</a> + <a class=\"trait\" href=\"futures_util/stream/trait.FusedStream.html\" title=\"trait futures_util::stream::FusedStream\">FusedStream</a>,<br>&nbsp;&nbsp;&nbsp;&nbsp;F: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/ops/function/trait.FnMut.html\" title=\"trait core::ops::function::FnMut\">FnMut</a>(St::<a class=\"type\" href=\"futures_util/stream/trait.TryStream.html#associatedtype.Error\" title=\"type futures_util::stream::TryStream::Error\">Error</a>) -&gt; E,&nbsp;</span>","synthetic":false,"types":["futures_util::stream::try_stream::map_err::MapErr"]},{"text":"impl&lt;St, Fut, F&gt; <a class=\"trait\" href=\"futures_util/stream/trait.FusedStream.html\" title=\"trait futures_util::stream::FusedStream\">FusedStream</a> for <a class=\"struct\" href=\"futures_util/stream/struct.OrElse.html\" title=\"struct futures_util::stream::OrElse\">OrElse</a>&lt;St, Fut, F&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;St: <a class=\"trait\" href=\"futures_util/stream/trait.TryStream.html\" title=\"trait futures_util::stream::TryStream\">TryStream</a> + <a class=\"trait\" href=\"futures_util/stream/trait.FusedStream.html\" title=\"trait futures_util::stream::FusedStream\">FusedStream</a>,<br>&nbsp;&nbsp;&nbsp;&nbsp;F: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/ops/function/trait.FnMut.html\" title=\"trait core::ops::function::FnMut\">FnMut</a>(St::<a class=\"type\" href=\"futures_util/stream/trait.TryStream.html#associatedtype.Error\" title=\"type futures_util::stream::TryStream::Error\">Error</a>) -&gt; Fut,<br>&nbsp;&nbsp;&nbsp;&nbsp;Fut: <a class=\"trait\" href=\"futures_util/future/trait.TryFuture.html\" title=\"trait futures_util::future::TryFuture\">TryFuture</a>&lt;Ok = St::<a class=\"type\" href=\"futures_util/stream/trait.TryStream.html#associatedtype.Ok\" title=\"type futures_util::stream::TryStream::Ok\">Ok</a>&gt;,&nbsp;</span>","synthetic":false,"types":["futures_util::stream::try_stream::or_else::OrElse"]},{"text":"impl&lt;St, Fut, F&gt; <a class=\"trait\" href=\"futures_util/stream/trait.FusedStream.html\" title=\"trait futures_util::stream::FusedStream\">FusedStream</a> for <a class=\"struct\" href=\"futures_util/stream/struct.TryFilter.html\" title=\"struct futures_util::stream::TryFilter\">TryFilter</a>&lt;St, Fut, F&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;St: <a class=\"trait\" href=\"futures_util/stream/trait.TryStream.html\" title=\"trait futures_util::stream::TryStream\">TryStream</a> + <a class=\"trait\" href=\"futures_util/stream/trait.FusedStream.html\" title=\"trait futures_util::stream::FusedStream\">FusedStream</a>,<br>&nbsp;&nbsp;&nbsp;&nbsp;F: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/ops/function/trait.FnMut.html\" title=\"trait core::ops::function::FnMut\">FnMut</a>(&amp;St::<a class=\"type\" href=\"futures_util/stream/trait.TryStream.html#associatedtype.Ok\" title=\"type futures_util::stream::TryStream::Ok\">Ok</a>) -&gt; Fut,<br>&nbsp;&nbsp;&nbsp;&nbsp;Fut: <a class=\"trait\" href=\"futures_util/future/trait.Future.html\" title=\"trait futures_util::future::Future\">Future</a>&lt;Output = <a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.bool.html\">bool</a>&gt;,&nbsp;</span>","synthetic":false,"types":["futures_util::stream::try_stream::try_filter::TryFilter"]},{"text":"impl&lt;St, Fut, F, T&gt; <a class=\"trait\" href=\"futures_util/stream/trait.FusedStream.html\" title=\"trait futures_util::stream::FusedStream\">FusedStream</a> for <a class=\"struct\" href=\"futures_util/stream/struct.TryFilterMap.html\" title=\"struct futures_util::stream::TryFilterMap\">TryFilterMap</a>&lt;St, Fut, F&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;St: <a class=\"trait\" href=\"futures_util/stream/trait.TryStream.html\" title=\"trait futures_util::stream::TryStream\">TryStream</a> + <a class=\"trait\" href=\"futures_util/stream/trait.FusedStream.html\" title=\"trait futures_util::stream::FusedStream\">FusedStream</a>,<br>&nbsp;&nbsp;&nbsp;&nbsp;Fut: <a class=\"trait\" href=\"futures_util/future/trait.TryFuture.html\" title=\"trait futures_util::future::TryFuture\">TryFuture</a>&lt;Ok = <a class=\"enum\" href=\"https://doc.rust-lang.org/nightly/core/option/enum.Option.html\" title=\"enum core::option::Option\">Option</a>&lt;T&gt;, Error = St::<a class=\"type\" href=\"futures_util/stream/trait.TryStream.html#associatedtype.Error\" title=\"type futures_util::stream::TryStream::Error\">Error</a>&gt;,<br>&nbsp;&nbsp;&nbsp;&nbsp;F: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/ops/function/trait.FnMut.html\" title=\"trait core::ops::function::FnMut\">FnMut</a>(St::<a class=\"type\" href=\"futures_util/stream/trait.TryStream.html#associatedtype.Ok\" title=\"type futures_util::stream::TryStream::Ok\">Ok</a>) -&gt; Fut,&nbsp;</span>","synthetic":false,"types":["futures_util::stream::try_stream::try_filter_map::TryFilterMap"]},{"text":"impl&lt;St&gt; <a class=\"trait\" href=\"futures_util/stream/trait.FusedStream.html\" title=\"trait futures_util::stream::FusedStream\">FusedStream</a> for <a class=\"struct\" href=\"futures_util/stream/struct.TryFlatten.html\" title=\"struct futures_util::stream::TryFlatten\">TryFlatten</a>&lt;St&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;St: <a class=\"trait\" href=\"futures_util/stream/trait.TryStream.html\" title=\"trait futures_util::stream::TryStream\">TryStream</a> + <a class=\"trait\" href=\"futures_util/stream/trait.FusedStream.html\" title=\"trait futures_util::stream::FusedStream\">FusedStream</a>,<br>&nbsp;&nbsp;&nbsp;&nbsp;St::<a class=\"type\" href=\"futures_util/stream/trait.TryStream.html#associatedtype.Ok\" title=\"type futures_util::stream::TryStream::Ok\">Ok</a>: <a class=\"trait\" href=\"futures_util/stream/trait.TryStream.html\" title=\"trait futures_util::stream::TryStream\">TryStream</a>,<br>&nbsp;&nbsp;&nbsp;&nbsp;&lt;St::<a class=\"type\" href=\"futures_util/stream/trait.TryStream.html#associatedtype.Ok\" title=\"type futures_util::stream::TryStream::Ok\">Ok</a> as <a class=\"trait\" href=\"futures_util/stream/trait.TryStream.html\" title=\"trait futures_util::stream::TryStream\">TryStream</a>&gt;::<a class=\"type\" href=\"futures_util/stream/trait.TryStream.html#associatedtype.Error\" title=\"type futures_util::stream::TryStream::Error\">Error</a>: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;St::<a class=\"type\" href=\"futures_util/stream/trait.TryStream.html#associatedtype.Error\" title=\"type futures_util::stream::TryStream::Error\">Error</a>&gt;,&nbsp;</span>","synthetic":false,"types":["futures_util::stream::try_stream::try_flatten::TryFlatten"]},{"text":"impl&lt;St, Fut, F&gt; <a class=\"trait\" href=\"futures_util/stream/trait.FusedStream.html\" title=\"trait futures_util::stream::FusedStream\">FusedStream</a> for <a class=\"struct\" href=\"futures_util/stream/struct.TrySkipWhile.html\" title=\"struct futures_util::stream::TrySkipWhile\">TrySkipWhile</a>&lt;St, Fut, F&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;St: <a class=\"trait\" href=\"futures_util/stream/trait.TryStream.html\" title=\"trait futures_util::stream::TryStream\">TryStream</a> + <a class=\"trait\" href=\"futures_util/stream/trait.FusedStream.html\" title=\"trait futures_util::stream::FusedStream\">FusedStream</a>,<br>&nbsp;&nbsp;&nbsp;&nbsp;F: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/ops/function/trait.FnMut.html\" title=\"trait core::ops::function::FnMut\">FnMut</a>(&amp;St::<a class=\"type\" href=\"futures_util/stream/trait.TryStream.html#associatedtype.Ok\" title=\"type futures_util::stream::TryStream::Ok\">Ok</a>) -&gt; Fut,<br>&nbsp;&nbsp;&nbsp;&nbsp;Fut: <a class=\"trait\" href=\"futures_util/future/trait.TryFuture.html\" title=\"trait futures_util::future::TryFuture\">TryFuture</a>&lt;Ok = <a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.bool.html\">bool</a>, Error = St::<a class=\"type\" href=\"futures_util/stream/trait.TryStream.html#associatedtype.Error\" title=\"type futures_util::stream::TryStream::Error\">Error</a>&gt;,&nbsp;</span>","synthetic":false,"types":["futures_util::stream::try_stream::try_skip_while::TrySkipWhile"]},{"text":"impl&lt;T&gt; <a class=\"trait\" href=\"futures_util/stream/trait.FusedStream.html\" title=\"trait futures_util::stream::FusedStream\">FusedStream</a> for <a class=\"struct\" href=\"futures_util/stream/struct.Repeat.html\" title=\"struct futures_util::stream::Repeat\">Repeat</a>&lt;T&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;T: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a>,&nbsp;</span>","synthetic":false,"types":["futures_util::stream::repeat::Repeat"]},{"text":"impl&lt;T&gt; <a class=\"trait\" href=\"futures_util/stream/trait.FusedStream.html\" title=\"trait futures_util::stream::FusedStream\">FusedStream</a> for <a class=\"struct\" href=\"futures_util/stream/struct.Empty.html\" title=\"struct futures_util::stream::Empty\">Empty</a>&lt;T&gt;","synthetic":false,"types":["futures_util::stream::empty::Empty"]},{"text":"impl&lt;Fut:&nbsp;<a class=\"trait\" href=\"futures_util/future/trait.Future.html\" title=\"trait futures_util::future::Future\">Future</a>&gt; <a class=\"trait\" href=\"futures_util/stream/trait.FusedStream.html\" title=\"trait futures_util::stream::FusedStream\">FusedStream</a> for <a class=\"struct\" href=\"futures_util/stream/struct.Once.html\" title=\"struct futures_util::stream::Once\">Once</a>&lt;Fut&gt;","synthetic":false,"types":["futures_util::stream::once::Once"]},{"text":"impl&lt;T&gt; <a class=\"trait\" href=\"futures_util/stream/trait.FusedStream.html\" title=\"trait futures_util::stream::FusedStream\">FusedStream</a> for <a class=\"struct\" href=\"futures_util/stream/struct.Pending.html\" title=\"struct futures_util::stream::Pending\">Pending</a>&lt;T&gt;","synthetic":false,"types":["futures_util::stream::pending::Pending"]},{"text":"impl&lt;St1, St2&gt; <a class=\"trait\" href=\"futures_util/stream/trait.FusedStream.html\" title=\"trait futures_util::stream::FusedStream\">FusedStream</a> for <a class=\"struct\" href=\"futures_util/stream/struct.Select.html\" title=\"struct futures_util::stream::Select\">Select</a>&lt;St1, St2&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;St1: <a class=\"trait\" href=\"futures_util/stream/trait.Stream.html\" title=\"trait futures_util::stream::Stream\">Stream</a>,<br>&nbsp;&nbsp;&nbsp;&nbsp;St2: <a class=\"trait\" href=\"futures_util/stream/trait.Stream.html\" title=\"trait futures_util::stream::Stream\">Stream</a>&lt;Item = St1::<a class=\"type\" href=\"futures_util/stream/trait.Stream.html#associatedtype.Item\" title=\"type futures_util::stream::Stream::Item\">Item</a>&gt;,&nbsp;</span>","synthetic":false,"types":["futures_util::stream::select::Select"]},{"text":"impl&lt;T, F, Fut, Item&gt; <a class=\"trait\" href=\"futures_util/stream/trait.FusedStream.html\" title=\"trait futures_util::stream::FusedStream\">FusedStream</a> for <a class=\"struct\" href=\"futures_util/stream/struct.Unfold.html\" title=\"struct futures_util::stream::Unfold\">Unfold</a>&lt;T, F, Fut&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;F: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/ops/function/trait.FnMut.html\" title=\"trait core::ops::function::FnMut\">FnMut</a>(T) -&gt; Fut,<br>&nbsp;&nbsp;&nbsp;&nbsp;Fut: <a class=\"trait\" href=\"futures_util/future/trait.Future.html\" title=\"trait futures_util::future::Future\">Future</a>&lt;Output = <a class=\"enum\" href=\"https://doc.rust-lang.org/nightly/core/option/enum.Option.html\" title=\"enum core::option::Option\">Option</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.tuple.html\">(</a>Item, T<a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.tuple.html\">)</a>&gt;&gt;,&nbsp;</span>","synthetic":false,"types":["futures_util::stream::unfold::Unfold"]}];
if (window.register_implementors) {window.register_implementors(implementors);} else {window.pending_implementors = implementors;}})()