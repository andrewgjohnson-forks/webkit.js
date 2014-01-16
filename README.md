webkit.js
=========

An experimental port of WebKit (Specifically, webcore) to JavaScript aimed at running in both node.js and browsers. This is currently non-functional and is intended for developers and contributors.

Goals
----

  - Produce a renderer in pure JavaScript that supports rendering to WebGL/Canvas contexts.
  - Develop frameworks for image/webpage capturing and automated web testing (similar to PhantomJS).
  - Develop a fromework for prototyping CSS filters, HTML elements and attributes.
  - Experimental harness for pure javascript rendering performance.
  - Develop a javascript based browser in nodejs (just for fun).

Status
----

**Toolchain**
- (BAD) Currently will only compile with Emscripten 1.8.2 on MacOSX in Xcode. 

**Building**
- (GOOD) Currently the latest nightly WebKit builds.

**Linking**
- (HORRIFIC) There are plenty of linking issues to be addressed; however visibility into this is minimal. Currently the system links but has quite a few unresolved symbols that will cause the renderer to crash. 

**Tests**
- (NON EXISTANT) Tests for javascript<->C++ needs to be developed (non-layout related code)
- (BAD) Unit tests that integrate with WebKit's LayoutTests

** Supported Features **
* (GOOD) Features that are *not* currently supported:

    * Accelerated 2D Canvas
    * CSS Image Resolution
    * CSS Image Orientation
    * CSS3 Text
    * Draggable Regions
    * Encrypted Media
    * Font Load Events
    * Input Speech
    * Audio
    * Video
    * Media Streams
    * JavaScript Debugger / Inspector
    * MHTML
    * PDF/PDFKit
    * Quota's
    * Web Workers
    * Web Sockets
    * Shadow DOM
    * Web Timing
    * XSLT
    * Native Widgets (IFRAME, Buttons, Text Boxes, etc.)
    * Any Resource Loaders
    * Font Rendering

** Frameworks **
- (NON EXISTANT) Frameworks to easily perform common tasks with the renderer under various contexts.

** Documentation **
- (NON EXISTANT) Lots and lots of documentation, currently this is it.


Building
-----------

** Requirements **
* MacOS X Lion with Xcode 4+
* Emscripten 1.8.2+
* At least 16GB of free space (seriously)
* At least 4GB of RAM

** Building webkit.js step-by-step **
1. Clone the repo.
2. Go to WebKitJS/tools and in a terminal run 
```sh
cp -pa ./WebKitJS/tools/EmscriptenXcode.xcplugin /Applications/Xcode.app/Contents/PlugIns/EmscriptenXcode.plugin 
vim /Applications/Xcode.app/Contents/PlugIns/EmscriptenXcode.xcplugin/Contents/Resources/GCC\ 4.5.xcspec 
```
3. Modify line 35 and set ExecPath to the path of em++ included with Emscripten.
4. Then run:
```sh
vim WebKit/Source/WebCore/Configurations/Base.xcconfig
```
5. Replace "EMSCRIPTEN_SYSTEM" with the path to the system headers for emscripten.
6. Open WebKit.xcworkspace in Xcode
7. Change the Schema to "WebcoreJS" and make sure you build in Release (some systems Normal), not Debug. Hit Play and get some coffee or go do some chores.
8. Your linking will most likely fail.  If so, just run the terminal command:
```sh
em++ -r -isysroot /Path/To/Emscripten/1.8.2/system /Path/To/Your/WebKitBuild/*.o -std=c++11 -s FULL_ES2=1 -O2 -stdlib=libc++ -s LINKABLE=1 -o /Path/To/Your/WebKitBuild/webkit.js
```

9. You can also create individual js files for each class in WebKit to ease debugging. Run:
```sh
find . -name "*.o" | xargs -I {} em++ -isysroot /Path/To/Your/Emscripten/1.8.2/system {} -std=c++11 -s FULL_ES2=1 -O2 -stdlib=libc++ -s LINKABLE=1 -s SIDE_MODULE=1 -o /Some/Folder/For/Output/{}.js
```

Contributing
--------------

There's so much to be done any help is appreciated, at the moment I have a brutal wrapper/harness that can render DIV's with various colors to a WebGL surface in Chrome 32. It's not impressive but its a proof of concept.

** Getting around the code **

```sh
/WebKit/ This is a modified version of Apple's official repo.
/WebKit/Source/WebCore This is where 90% of the work is done.
/WebKit/Source/WebCore/bindings/scripts This is an important folder where WebKit autogenerates bindings
/WebKit/Source/WTF/ is a cross-platform library for common tasks such as HashMaps, etc.
/WebKit/Source/WTF/PlatformJS.h these are C++ pre-process settings for PLATFORM(JS)
/WebKit/Source/WebCore/Configurations/ these are important compile-time configurations for WebCore

/WebKitJS/ When compiled the output of WebKit is placed in WebKitJS/webkit.js
/WebKitJS/tools/ Any helpful tools i've come across (only one for now...)
/WebKitJS/tools/cppfilter.js  This demangles C++ symbols contained in emscripten.js
/WebKitJS/tools/EmscriptenXcode.plugin This is a Xcode plugin, and a temporary hack for using emscripten
```

** It's important to know**

* The code within the WebKit folder is pulled from upstream, becareful not to move any files, remove any files or heavily refactor any source file as it will cause headaches when merging.

* Place a .gitignore on ./WebKit/WebKitBuild/ so you do not accidently commit build files.
* Enabling/disabling settings within the Configurations folder in WebCore will have a lot of consequences, most of the disabled features are disabled because there's no possible work around for including the platform specific code (it needs to be created in JS from scratch)
* A good amount of the bindings and code within the WebCore is auto generated from scripts, be careful when you have build errors to make sure you're not modifying a "Derived Source" otherwise you'll find your changes will be just over-written the next time the derived sources runs.
* The current webkit.js in WebKitJS folder was compiled exposing its symbols, this results in a heavy file size (current 44MB - 1/15/14). This can come down considerably once a framework/API is developed, tests are created and optimizations can become a priority.
* Do not modify code within ./WebKitJS/webkit.js or ./WebKitJS/debug/ these files are over-written when WebKit is built, so its somewhat pointless unless you're testing.

License
----

MIT.. or whatever WebKit requires it to be...

&copy; 2014 True Interactions http://www.trueinteractions.com/
[trevor linton]:mailto:trevor dot linton plus github at gmail dot com
[@trevorlinton]:http://twitter.com/trevorlinton